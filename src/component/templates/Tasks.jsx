import Completed from "../../organisms/Completed";
import EmptyList from "../atoms/EmptyList";
import Header from "../atoms/Header";
import InputTasks from "../molecules/InputTasks";

const Tasks = () => {
    return(
        <div className="container-fluid">
            <Header />
            <Completed />
            <InputTasks />
        </div>
    );
}

export default Tasks;