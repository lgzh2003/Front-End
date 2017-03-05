var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Node.js is in serve</h1>');
	res.end('<p>Hey Keyu, I am here</p>');
}).listen(3000);//listen 3000 port
