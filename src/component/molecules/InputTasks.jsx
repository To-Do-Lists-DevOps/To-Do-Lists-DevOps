import PlusIcon from "../atoms/PlusIcon";

const InputTasks = () => {
    return(
        <div className="flex flex-row bg-[#2A2A2A] w-full h-10 rounded-lg py-[.2em] mb-2">
            <PlusIcon />
            <input className="bg-[#2A2A2A] w-full px-5 shadow-lg text-[#778BDD] placeholder-addTaskPlaceholder" placeholder="Add a task" type="text" name="input" />
        </div>
    );
}

export default InputTasks;