import Navbar from "../components/navbar";
import MyTimer from "../components/timer";
import ExerciseCard from "../components/exerciseCard";
import { userContext } from "../App";
import { useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

const StartWorkoutLibrary = () => {
  const [currentTime, setCurrentTime] = useState(-1);
  const [expiryTime, setExpiryTime] = useState(null);
  const { currentWorkout, setCurrentWorkout } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [currentWorkoutRes, isUserWorkingOutRes] = await Promise.all([
          axios.get("/getCurrentWorkout"),
          axios.get("/isUserWorkingOut"),
        ]);

        setCurrentWorkout(currentWorkoutRes.data.exercise);

        if (isUserWorkingOutRes.data.isWorkingOut) {
          setCurrentTime(isUserWorkingOutRes.data.timeLeft);
        } else {
          axios.get("/getCurrentWorkout").then((res) => {
            setCurrentTime(res.data.time);
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error fetching data
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, [setCurrentWorkout]);

  useEffect(() => {
    console.log("Current time updated:", currentTime);
    if (currentTime !== -1) {
      const timer = setInterval(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + currentTime);
        setExpiryTime(time);
      }, 1000); // Update every second

      return () => clearInterval(timer);
    }
  }, [currentTime]);

  const handleTimerFinish = () => {
    axios
      .get("/finishedWorkout")
      .then((res) => {
        console.log("User out of workout and time set to 0.");
      })
      .catch((error) => {
        console.error("Error setting user out of workout:", error);
        // Handle error setting user out of workout
      });
  };

  const finishWorkout = () => {
    setExpiryTime(new Date());
    handleTimerFinish();
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
          <div className="flex-auto flex-grow flex-col items-center justify-center">
            {currentWorkout && (
              <ExerciseCard
                key={1}
                exerciseNumber={1}
                exercise={currentWorkout.name}
                duration={currentWorkout.length} // Assuming the key for exercise duration is 'time'
                sets={currentWorkout.sets}
                reps={currentWorkout.reps}
                intensity={currentWorkout.intensity}
                weight={currentWorkout.weight}
              />
            )}
          </div>
        </div>
        <button
          className="btn btn-success mt-6"
          onClick={() => {
            navigate("/library");
            finishWorkout();
          }}
        >
          Finish workout
        </button>
      </div>
    </>
  );
};

export default StartWorkoutLibrary;
