import React, { useEffect, useState } from "react";
import Header from "../atoms/Header";
import InputTasks from "../molecules/InputTasks";
import Lists from "../molecules/Lists";
import Completed from "../organisms/Completed";
import axios from "axios";

const Tasks = () => {
    const [value, setValue] = useState("")
    const [updatedValue, setUpdatedValue] = useState("");
    const [todos, setTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])
    const [showInput, setShowInput] = useState({});
    const BASE_URL = 'http://localhost:8000';


    const getPendingTodos = async () => {
        const response = await axios.get(`${BASE_URL}/pending`);
        setTodos(response.data);
    }

    const getCompleteTodos = async () => {
        const response = await axios.get(`${BASE_URL}/complete`);
        setCompleteTodos(response.data);
    }

    useEffect(() => {
        getPendingTodos();
        getCompleteTodos();
    }, [])

    const addHandlerTodo = async (event) => {
        event.preventDefault();
        await axios.post(`${BASE_URL}/create`, {
            toDo: value,
        });
        await getPendingTodos();
    }

    const deleteHandlerTodo = async (id) => {
        await await axios.delete(`${BASE_URL}/delete/${id}`)
        await getPendingTodos();
    }

    const updateStatusHandler = async (id) => {
        await axios.put(`${BASE_URL}/updateStatus/${id}`);
        await getCompleteTodos();
        await getPendingTodos();
    }

    const onShowInputHandler = (id) => {
        setShowInput({...showInput, [id] : true });
    }

    const updateDataHandler = async (id) => {
        console.log(id);
        await axios.put(`${BASE_URL}/update/${id}`, {
            toDo: updatedValue,
        })
        setShowInput({...showInput, [id] : false });
        await getPendingTodos();
    }

    return (
        <div className="container-fluid">
            <Header />
            <Lists todos={todos} 
                setUpdatedValue={setUpdatedValue} 
                onDeleteHandler={deleteHandlerTodo} 
                onUpdateDataHandler={updateDataHandler} 
                onUpdateStatusHandler={updateStatusHandler} 
                onShowInputHandler={onShowInputHandler} 
                showInput={showInput}
            />
            <Completed todos={completeTodos} />
            <InputTasks onSubmitHandler={addHandlerTodo} setValue={setValue} />
        </div>
    );
}

export default Tasks;