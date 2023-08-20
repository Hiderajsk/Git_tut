const body=(req,res)=>{
    res.writeHead(400,{"content-type":"application/json"});
    res.write(
        JSON.stringify(
            {
                name:"Saksham Kumar",
                comp:"PXE DRDO",
                salary:800,
                coligs:[
                    "Adarsh",
                    "Prashant",
                    "Ajit",
                ]
            }
        )
    )
    res.end();
}
const http=require('http');
http.createServer(body).listen(8086);