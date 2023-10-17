import EmptyList from "../atoms/EmptyList";
import Header from "../atoms/Header";
import InputTasks from "../molecules/InputTasks";

const Tasks = () => {
    return(
        <div className="container-fluid">
            <Header />
            <EmptyList />
            <InputTasks />
        </div>
    );
}

export default Tasks;