var http=require("http")
http.createServer(function(request,response){

response.writeHead(200, {'Content-Type': 'text/html'});
 // Send the response body as "Hello World"
 response.end('<h1>Hello World<h1>\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

