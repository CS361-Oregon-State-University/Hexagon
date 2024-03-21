import Navbar from "../components/navbar";
import ExerciseCard from "../components/exerciseCard";
import { userContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewWorkoutPlan = () => {
  const { currentWorkoutPlan, setCurrentWorkoutPlan } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/getWorkoutPlan")
      .then((res) => {
        setCurrentWorkoutPlan(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-between ml-20 mt-10">
        {currentWorkoutPlan.slice(0, 3).map((dayExercises, index) => (
          <div
            key={index}
            className="flex-auto flex-grow flex-col items-center justify-center"
          >
            <div className="badge badge-neutral text-xl p-5">
              Day {index + 1}
            </div>
            {dayExercises.map((exercise, i) => (
              <ExerciseCard
                key={i}
                exerciseNumber={i + 1}
                exercise={exercise.name}
                duration={exercise.time} // Assuming the key for exercise duration is 'time'
                sets={exercise.sets}
                reps={exercise.reps}
                intensity={exercise.intensity}
                weight={exercise.weight}
              />
            ))}
          </div>
        ))}
      </div>
      <Link to="/customize-workout-plan" className="mx-1">
        <button className="ml-[40rem] btn btn-success mt-6">
          Customize Workout Plan
        </button>
      </Link>
    </>
  );
};

export default ViewWorkoutPlan;
