const express = require('express')
const app = express()
const {createTodo,updateStatus,updateToDo,pendingToDo,completeToDo,deleteToDo} = require("../controllers/toDoController")

app.post("/create",createTodo)
app.put("/update/:id",updateToDo)
app.get("/pending",pendingToDo)
app.get("/complete",completeToDo)
app.put("/updateStatus/:id", updateStatus)
app.delete("/delete/:id", deleteToDo)

module.exports = app 