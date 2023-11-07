# Simple_node_proxy

This is a simple node js proxy server to connect the internet to internal VNet.

## Build

```shell
npm install
npm run start # for dev
node ./index.js # for prod
```

## Environment variables

* PORT default is 8080
* APP_PROXY_PORT default is 3000
* APP_PROXY_DEST default is acaux02
