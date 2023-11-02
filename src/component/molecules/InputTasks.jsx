import PlusIcon from "../atoms/PlusIcon";
import React from "react";

const InputTasks = ({onSubmitHandler, setValue}) => {
    return (
        <form onSubmit={onSubmitHandler}>
            <div className=" z-40 flex flex-row bg-[#2A2A2A] w-full h-10 rounded-lg py-[.2em] mb-2">
                <PlusIcon />
                <input onChange={(e) => setValue(e.target.value)} className="bg-[#2A2A2A] w-full shadow-lg text-[#778BDD] placeholder-addTaskPlaceholder" placeholder="Add a task" type="text" name="input" />
            </div>
        </form>
    );
}

export default InputTasks;