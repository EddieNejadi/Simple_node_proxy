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
const proxy_dest = process.env.PROXY_DEST || null

app.get('/', (req, res) => {
  if (proxy_dest){
    res.send(`Redirecting to ${proxy_dest}`)
  } else {
    res.send('No proxy dest dest is set')
  }
})
app.get('/test', (req, res) => {
  res.send('it is working')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})