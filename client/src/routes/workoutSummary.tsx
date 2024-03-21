import Navbar from "../components/navbar";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const WorkoutSummary = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(-1);
  const [totalLoad, setTotalLoad] = useState();
  const [caloriesBurned, calculateCaloriesBurned] = useState();

  useEffect(() => {
    axios.get("/calculateCaloriesBurned").then((res) => {
      console.log(res.data);
      calculateCaloriesBurned(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/calculateWorkoutTime").then((res) => {
      setCurrentTime(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/calculateTotalLoad").then((res) => {
      setTotalLoad(res.data);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col items-center h-80">
        <div className="block w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Summary of Workout
          </h5>
          <ul className="text-center">
            <li>
              <strong>Date:</strong> {currentDate}
            </li>
            <li>
              <strong>Time:</strong> {currentTime / 60} minutes
            </li>
            <li>
              <strong>Calories Burnt:</strong> {caloriesBurned} Calories
            </li>
            <li>
              <strong>Total Load:</strong> {totalLoad} lbs
            </li>
          </ul>
        </div>
        <button
          className="mt-6 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => navigate("/library")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default WorkoutSummary;
