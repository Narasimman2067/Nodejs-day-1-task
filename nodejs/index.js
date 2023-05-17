import express from "express";
import fs from "fs"
const app = express();
let Time = new Date();
let TimeStamps="Current Timing :"+Time.toUTCString()

// For references
// let currentDetails = Time.toUTCString()
// let month = (Time.getMonth())+1
// let date = Time.getDate()
// let year = Time.getFullYear()  
 
app.get("/time",(req,res)=>{
    fs.writeFile("./TimeStamps/current date-time.txt",TimeStamps,(err)=>{
        if(err){
            console.log(err)
            res.send("Error  :   "+err)
    }
    else{
        res.send("File Created succesfully")
    } 
    })
    
})
    app.listen(8000,()=>{
        console.log(`8000 server working`)
    })