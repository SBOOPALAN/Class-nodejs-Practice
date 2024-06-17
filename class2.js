var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(200);
    res.end("welcome to my page")
}).listen(8081);
console.log("server is running on port http://localhost:8081");
