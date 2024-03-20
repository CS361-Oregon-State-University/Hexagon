import Navbar from "../components/navbar";
import { MyTimer } from "../components/timer";
import ExerciseCard from "../components/exerciseCard";
import { useNavigate } from "react-router";

const startWorkout = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body items-center">
            <MyTimer expiryTimestamp={time} />
          </div>
        </div>
        <ExerciseCard exerciseNumber="1" exercise="Running" duration="24" />
        <ExerciseCard
          exerciseNumber="2"
          exercise="Bench Press"
          sets="5 x 5"
          weight="180 lbs"
        />
        <ExerciseCard
          exerciseNumber="3"
          exercise="Squat"
          sets="5 x 5"
          weight="180 lbs"
        />
        <button className="btn btn-success mt-6" onClick={() => navigate("/workout-summary")}>Finish workout</button>
      </div>
    </>
  );
};

export default startWorkout;
