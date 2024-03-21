import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
  videoLink?: any;
};

const Library = () => {
  const {
    setIsFromLibrary, // Destructure the context value here
  } = useContext(userContext); // Use the useContext hook to access context

  const [workouts, setWorkouts] = useState<workout[]>([]);
  const [isUserWorkingOut, setIsUserWorkingOut] = useState(false);
  const [videoLinks, setVideoLink] = useState([]);
  useEffect(() => {
    axios.get<workout[]>("/getWorkouts").then((res) => {
      setWorkouts(res.data);
    });

    axios.get("/isUserWorkingOut").then((res) => {
      setIsUserWorkingOut(res.data.isWorkingOut);
    });
    axios.get("/getVideoLinks").then((res) => {
      setVideoLink(res.data);
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
              videoLink={videoLinks[workout.name]}
              setIsFromLibrary={setIsFromLibrary}
              isUserWorkingOut={isUserWorkingOut}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Library;
