import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import WorkoutCards from "../components/workoutCards";

const library = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1 className=" text-5xl font-semibold flex flex-col items-center mt-[50px]">
          Workout Library
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-[30px] max-w-[80%] mx-auto gap-y-8 justify-evenly justify-items-center content-evenly items-center">
          <WorkoutCards />
          <WorkoutCards />
          <WorkoutCards />
          <WorkoutCards />
          <WorkoutCards />
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

export default library;
