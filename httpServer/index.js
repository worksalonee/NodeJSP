const http=require("http")
const fs=require("fs")

const app= http.createServer((req,res)=>{
    const{method,url}=req
    if(method=="GET"){
        if(url=="/"){
            const data=fs.readFileSync("./pages/Home.html")
            res.write(data)
        res.end()
        }
    }
    if(url=="/about"){
        const data=fs.readFileSync("./pages/About.html")
        res.end(data)
    }
    if(url=="/Home.css"){
        const data=fs.readFileSync("./css/Home.css")
        res.end(data)
    }

})

app.listen(8000) //http://localhost:8000