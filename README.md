# A React+Typescript template to quickly build D-WISE Apps

#### Tooling

- Vite [LINK](https://vitejs.dev/)

#### Components

- React MUI (with emotion/styled) [LINK](https://mui.com/)
- React MUI Lab [LINK](https://mui.com/material-ui/about-the-lab/)
- Roboto font
- Material Icons

#### State management & Data Fetching

- React Query [LINK](https://tanstack.com/query/v4)
- Redux Toolkit [LINK](https://redux-toolkit.js.org/)

#### Libraries

- React Auth Kit [LINK](https://authkit.arkadip.dev/)
- React Router [LINK](https://tanstack.com/router/v1)
- React Virtual [LINK](https://tanstack.com/virtual/v3)
- React Hook Form [LINK](https://react-hook-form.com/)
- React Hook Form - ErrorMessage [LINK](https://react-hook-form.com/api/useformstate/errormessage/)
- React Hot Toast [LINK](https://react-hot-toast.com/)

#### Other

- Barrel Exports [LINK](https://blog.logrocket.com/using-barrel-exports-organize-react-components/)

## Getting started

1. Install dependencies: `npm install`
2. Download openapi.json from backend: `npm run update-api`
   - This command is defined in package.json. The port to access the backend is set to localhost:18120. Please update it accordingly.
3. Generate openapi: `npm run generate-api`
4. Start the app: `npm run dev`
5. Build docker container: `docker build -f Dockerfile -t uhhlt/dwts_app_template:latest .`
6. Push docker container to hub: `docker push uhhlt/dwts_app_template:latest`
