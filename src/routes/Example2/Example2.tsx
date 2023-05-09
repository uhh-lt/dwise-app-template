import { Button } from "@mui/material";
import toast from "react-hot-toast";

export function Example2() {
  return (
    <div>
      <Button variant="contained" color="success" onClick={() => toast.success("success!", { duration: 1000 })}>
        Success Toast!
      </Button>
      <Button variant="contained" color="error" onClick={() => toast.error("error!")}>
        Error Toast!
      </Button>
      <Button variant="contained" color="info" onClick={() => toast("blank!")}>
        Blank Toast!
      </Button>
      <Button variant="contained" color="info" onClick={() => toast.custom(<div>Hello World</div>)}>
        Custom Toast!
      </Button>
    </div>
  );
}
