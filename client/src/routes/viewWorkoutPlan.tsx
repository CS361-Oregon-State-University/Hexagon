import Navbar from "../components/navbar";
import ExerciseCard from "../components/exerciseCard";
import { Link } from "react-router-dom";

const viewWorkoutPlan = () => {

    return (
        <>
            <Navbar />

            <div className="flex items-center justify-between ml-20 mt-10">
                <div className="flex-auto flex-grow flex-col items-center justify-center">
                    <div className="badge badge-neutral text-xl p-5">Day 1</div>
                    <ExerciseCard exerciseNumber="1" exercise='Running' duration='24' />
                    <ExerciseCard exerciseNumber="2" exercise='Bench Press' sets='5 x 5' weight='180 lbs' />
                    <ExerciseCard exerciseNumber="3" exercise='Squat' sets='5 x 5' weight='180 lbs' />
                </div>
                <div className="flex-auto flex-grow flex-col items-center justify-center">
                    <div className="badge badge-neutral text-xl p-5">Day 2</div>
                    <ExerciseCard exerciseNumber="1" exercise='Running' duration='24' />
                    <ExerciseCard exerciseNumber="2" exercise='Bench Press' sets='5 x 5' weight='180 lbs' />
                    <ExerciseCard exerciseNumber="3" exercise='Squat' sets='5 x 5' weight='180 lbs' />
                </div>
                <div className="flex-auto flex-grow flex-col items-center justify-center">
                    <div className="badge badge-neutral text-xl p-5">Day 3</div>
                    <ExerciseCard exerciseNumber="1" exercise='Running' duration='24' />
                    <ExerciseCard exerciseNumber="2" exercise='Bench Press' sets='5 x 5' weight='180 lbs' />
                    <ExerciseCard exerciseNumber="3" exercise='Squat' sets='5 x 5' weight='180 lbs' />
                </div>
            </div>
            <Link to="/customize-workout-plan" className="mx-1">
                <button className="ml-[40rem] btn btn-success mt-6">
                    Customize Workout Plan
                </button>
            </Link>
        </>
    );
};

export default viewWorkoutPlan;