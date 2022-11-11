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
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})