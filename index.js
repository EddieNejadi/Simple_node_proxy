var http = require('http'),
    httpProxy = require('http-proxy');


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

var server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
});

console.log("listening on port 3000")
server.listen(3000);
