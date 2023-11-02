require('dotenv').config()


const express = require("express")
const app = express()
const port = process.env.PORT
const route = require("./router/route")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
 });


app.use(express.json())
app.use(route)


app.get("/",(req,res)=>{
    res.status(200).json("Welcome to Simple To Do List API")
})

app.listen(port,()=>{
    console.log(`API connect at http://localhost:${port}`)
})