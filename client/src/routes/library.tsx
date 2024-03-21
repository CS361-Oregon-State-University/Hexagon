import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import WorkoutCards from "../components/workoutCards";
import { useState, useEffect, useContext } from "react"; // Import useContext here
import axios from "axios";
import { userContext } from "../App";

type workout = {
  name: string;
  time?: number;
  intensity?: string;
  type: string;
  sets?: number;
  reps?: number;
  weight?: number;
};

const Library = () => {
  const [workouts, setWorkouts] = useState<workout[]>([]);
  const [isUserWorkingOut, setIsUserWorkingOut] = useState(false);

  useEffect(() => {
    axios.get<workout[]>("/getWorkouts").then((res) => {
      setWorkouts(res.data);
    });

    axios.get("/isUserWorkingOut").then((res) => {
      setIsUserWorkingOut(res.data.isWorkingOut);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1 className=" text-5xl font-semibold flex flex-col items-center mt-[50px]">
          Workout Library
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-[30px] max-w-[80%] mx-auto gap-y-8 justify-evenly justify-items-center content-evenly items-center">
          {workouts?.map((workout: workout, i) => (
            <WorkoutCards
              key={i} // Remember to add a unique key prop when mapping over arrays in React
              name={workout.name}
              length={workout.time}
              intensity={workout.intensity}
              type={workout.type}
              sets={workout.sets}
              reps={workout.reps}
              weight={workout.weight}
              isUserWorkingOut={isUserWorkingOut}
            />
          ))}
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-[50px]">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 PAAAAJ Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service (Don't hack us)
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy (Don't hack others)
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Library;
