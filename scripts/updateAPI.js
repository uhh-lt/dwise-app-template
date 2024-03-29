import * as fs from "fs";
import * as http from "http";
import minimist from "minimist";
import { exec } from "child_process";

// settings
let port = 18120;
const argv = minimist(process.argv.slice(2));
if (Object.keys(argv).includes("p")) {
  port = argv["p"];
} else if (Object.keys(argv).includes("port")) {
  port = argv["port"];
} else {
  console.error("Please specify port of the DWTS Backend API using -p <PORT> or --port <PORT>");
  process.exit();
}

// 1. remove existing openapi file
const openapiFilePath = "src/api/api.json";
if (fs.existsSync(openapiFilePath)) {
  fs.unlinkSync(openapiFilePath);
  console.log("Removed existing api.json");
}

// 2. download new openapi json file
http
  .get(`http://localhost:${port}/openapi.json`, (res) => {
    const { statusCode } = res;
    const contentType = res.headers["content-type"];

    let error;
    if (statusCode !== 200) {
      error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error("Invalid content-type.\n" + `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }

    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", () => {
      try {
        const openapi = JSON.parse(rawData);
        console.log("Downloaded new openapi.json");

        // 3. modify openapi file
        Object.values(openapi.paths).forEach((pathData) => {
          Object.values(pathData).forEach((operation) => {
            let tag = operation.tags[0];
            let operationId = operation.operationId;
            let toRemove = `${tag}-`;
            let newOperationId = operationId.replace(toRemove, "");
            operation.operationId = newOperationId;
          });
        });
        console.log("Modified openapi.json");

        // 4. write file
        fs.writeFileSync(openapiFilePath, JSON.stringify(openapi));
        console.log("Write api.json");

        // 5. prettify file
        console.log("Prettify api.json");
        exec(`prettier -w ${openapiFilePath}`, (err, stdout, stderr) => {
          if (err) {
            // node couldn't execute the command
            console.error("An error occured when trying to run prettier :(");
            return;
          }

          // the *entire* stdout and stderr (buffered)
          console.log(stdout);
          console.log(stderr);
        });
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
