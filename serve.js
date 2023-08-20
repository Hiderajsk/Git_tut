const http = require("http");

const body=(req,res)=>{
    res.write("<h1>Welcome to my first created, Something server of the Node JS</h1>");
    res.end();
}

http.createServer(body).listen(8081);


// // Another way to do the same thing
// http.createServer((req,res)=>{
//     res.write("<h1>Welcome to my first created server of the Node JS</h1>");
//     res.end();
// }).listen(8081);