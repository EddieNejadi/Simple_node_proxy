// var http = require('http'),
//     httpProxy = require('http-proxy');


// var proxy = httpProxy.createProxyServer({});

// proxy.on('proxyReq', function(proxyReq, req, res, options) {
//     var remote_ip = req.socket.remoteAddress || null
//   console.log(remote_ip)
//   proxyReq.setHeader('X-remote-ip', remote_ip);
// });

// var server = http.createServer(function(req, res) {
//   // You can define here your custom logic to handle the request
//   // and then proxy the request.
//   proxy.web(req, res, {
//     target: 'http://10.0.0.12:8000'
//   });
// });

const express = require('express')
const app = express()
const { createProxyMiddleware } = require("http-proxy-middleware");
const app_port   = process.env.APP_PORT || 80
const proxy_port = process.env.APP_PROXY_PORT || 3000
const proxy_dest = process.env.APP_PROXY_DEST || 'acaux02'

app.get('/', (req, res) => {
  if (proxy_dest){
    res.send(`Redirecting to ${proxy_dest}:${proxy_port}`)
  } else {
    res.send('No proxy dest dest is set')
  }
})
// Proxy endpoints
app.use('/proxy', createProxyMiddleware({
  target: `${proxy_dest}:${proxy_port}`,
  changeOrigin: false,
  pathRewrite: {
      [`^/proxy`]: '',
  },
}));

app.get('/test', (req, res) => {
  res.send('it is working')
})

app.get('/info', (req, res) => {
  res.send(`APP_PROXY_DEST:APP_PROXY_PORT is set to ${proxy_dest}:${proxy_port}`)
})

app.listen(app_port, () => {
  console.log(`Example app listening at http://localhost:${proxy_port}`)
})