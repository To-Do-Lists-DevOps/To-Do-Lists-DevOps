require('dotenv').config()


const express = require("express")
const app = express()
const port = process.env.PORT
const route = require("./router/route")

app.use(express.json())
app.use(route)


app.get("/",(req,res)=>{
    res.status(200).json("Welcome to Simple To Do List API")
})

app.listen(port,()=>{
    console.log(`API connect at http://localhost:${port}`)
})