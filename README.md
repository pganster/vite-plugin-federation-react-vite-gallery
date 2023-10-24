# React - Vite Federation Issue Demonstration

This example shows the problem of using a library,
that builds on React ([react-image-gallery](https://github.com/xiaolin/react-image-gallery)), in the `remote` app. When running the `host` app, which consumes the `remote` app, 
you will receive the error `Cannot read properties of null (reading 'useRef')`. But when running the 
`remote` app directly, this error will not occur.

## Running

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install`, then `pnpm run build` and `pnpm run serve`. This will build and serve both `host` and `remote` on ports 5000, 5001 respectively.

- HOST: [localhost:5000](http://localhost:5000/)
- REMOTE: [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.
