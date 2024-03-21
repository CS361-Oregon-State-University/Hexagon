import Navbar from "../components/navbar";
import MyTimer from "../components/timer";
import ExerciseCard from "../components/exerciseCard";
import { userContext } from "../App";
import { useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

const StartWorkout = () => {
  const [currentTime, setCurrentTime] = useState(-1);
  const [expiryTime, setExpiryTime] = useState(null);
  const { currentWorkoutPlan, setCurrentWorkoutPlan } = useContext(userContext);

  useEffect(() => {
    axios.get("/calculateWorkoutTime").then((res) => {
      setCurrentTime(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/isUserWorkingOut").then((res) => {
      console.log(res.data);
      if (res.data.isWorkingOut) {
        setCurrentTime(res.data.timeLeft);
      }
    });
  }, []);

  useEffect(() => {
    if (currentTime !== -1) {
      const timer = setInterval(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + currentTime); // 10 minutes timer
        setExpiryTime(time);
      }, 750); // Update every second

      return () => clearInterval(timer); // Clear the timer on component unmount
    }
  }, [currentTime]);

  const navigate = useNavigate();

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

  const handleTimerFinish = () => {
    axios
      .get("/finishedWorkout")
      .then((res) => {
        console.log("User out of workout and time set to 0.");
      })
      .catch((error) => {
        console.error("Error setting user out of workout:", error);
      });
  };

  const finishWorkout = () => {
    setExpiryTime(new Date()); // Set the timer time to current time (0 seconds)
    handleTimerFinish(); // Call the function to finish workout
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
          <div className="card-body items-center">
            {expiryTime && (
              <MyTimer
                expiryTimestamp={expiryTime}
                onTimerFinish={handleTimerFinish}
              />
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          {currentWorkoutPlan.slice(0, 1).map((dayExercises, index) => (
            <div
              key={index}
              className="flex-auto flex-grow flex-col items-center justify-center"
            >
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
        <button
          className="btn btn-success mt-6"
          onClick={() => {
            navigate("/workout-summary");
            finishWorkout();
          }}
        >
          Finish workout
        </button>
      </div>
    </>
  );
};

export default StartWorkout;
