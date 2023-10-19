# Simple_node_proxy

This is simple node js proxy server to connect internet to internal VNet.

## Build

```shell
npm install
npm run start # for dev
node ./index.js # for prod
```

## Environment variables

* APP_PORT default is 80
* APP_PROXY_PORT default is 3000
* APP_PROXY_DEST default is acaux02
