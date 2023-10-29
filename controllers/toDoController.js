const {Tasks} = require("../models")



async function createTodo(req,res){
    try{
        const {toDo} = req.body
        const input = await Tasks.create({
            task : toDo,
            status: "pending"
        })
        const response={
            task: input.task,
            status: input.status
        }
        res.status(200).json(response)

    }
    catch(error){
        res.status(500).json({
            message: error
        })
    }
}

async function updateToDo(req,res){
    try{
        const {toDo} = req.body
        const {id} = req.params
        const update = await Tasks.update({
            task: toDo,
        },{
            where:{
                id : id
            },
            returning: true
        })
        res.status(200).json(update[1][0])
    }catch(error){
        res.status(500).json({
            status : 500,
            message: error
        })
    }
}

async function pendingToDo(req,res){
    try{
        const data = await Tasks.findAll({
            where:{
                status:"pending"
            }
        })

        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            status : 500,
            message: error
        })
    }
}

async function completeToDo(req,res){
    try{
        const data = await Tasks.findAll({
            where:{
                status:"complete"
            }
        })

        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            status : 500,
            message: error
        })
    }
}

async function updateStatus(req,res){
    try{
        const {id} = req.params
        const update = await Tasks.update({
            status: "complete"
        },{
            where:{
                id: id
            },
            returning:true
        })
        res.status(200).json(update[1][0])
    }catch(error){
        res.status(500).json({
            status : 500,
            message: error
        })
    }
}

async function deleteToDo(req,res){
    try{
        const {id} = req.params
        const del = await Tasks.destroy({
            where:{
                id
            }
        })

        res.status(200).json({
            del,
            message :"To Do successfully deleted"
        })
    }catch(error){
        res.status(500).json({
            status : 500,
            message: error
        })
    }
}
module.exports = {createTodo,updateStatus,updateToDo,pendingToDo,completeToDo,deleteToDo}