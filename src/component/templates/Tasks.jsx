import EmptyList from "../atoms/EmptyList";
import Header from "../atoms/Header";
import InputTasks from "../molecules/InputTasks";
import Completed from "../organisms/Completed";

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