import Navbar from "../components/navbar";
import { useNavigate } from "react-router";

const WorkoutSummary = () => {

    return(
        <>
            <Navbar />
            <div className="flex items-center justify-center h-40">
                <div className="p-4 rounded-lg border">
                    Hello there!
                </div>
            </div>
        </>
    );
}

export default WorkoutSummary;