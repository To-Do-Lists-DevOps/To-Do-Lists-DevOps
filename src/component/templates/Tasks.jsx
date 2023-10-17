import EmptyList from "../atoms/EmptyList";
import Header from "../atoms/Header";

const Tasks = () => {
    return(
        <div className="container-fluid">
            <Header />
            <EmptyList />
        </div>
    );
}

export default Tasks;