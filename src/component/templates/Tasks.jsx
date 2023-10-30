import EmptyList from "../atoms/EmptyList";
import Header from "../atoms/Header";
import InputTasks from "../molecules/InputTasks";
import Lists from "../molecules/Lists";
import Completed from "../organisms/Completed";

const Tasks = () => {
    return(
        <div className="container-fluid">
            <Header />
            <Lists />
            <Completed/>
            <InputTasks />
        </div>
    );
}

export default Tasks;