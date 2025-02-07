import express from "express"
import path from "path"
import  { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 5007;

app.use(express.static(path.join(__dirname, "dist")))


app.get("/ismail",(req,res)=>{
    try {
        res.status(200).json({message:"Hello Mohammed!"})
    } catch (error) {
        res.status(500).json({message:error})
    }
})

app.get("/*", (req,res) =>{
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(PORT,()=>{
    console.log(`the server is running ${PORT}`);
})    