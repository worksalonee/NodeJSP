const http= require("http")

const server=http.createServer((req,res)=>{
    const{url,method}=req
    console.log(url,method);
    if(method=="GET"){
        if(url=="/"){
            res.write("<h1>hello world</h1>")
            res.write('<h1>from node server</h1>')
            res.end()
        }
        if(url=="/contact"){
            res.write("<h1>this is contact page</h1>")
            res.end()
        }
    }
    
})

server.listen(7000)  //http://localhost:7000/