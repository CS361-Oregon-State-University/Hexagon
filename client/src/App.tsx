import { useState, createContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Signin from "./routes/signin";
import Landing from "./routes/landing";
import Library from "./routes/library";
import Profile from "./routes/profile";
import Faq from "./routes/faq";
import ScrollTop from "./components/scrolltop";
import StartWorkout from "./routes/startWorkout";
import ViewWorkoutPlan from "./routes/viewWorkoutPlan";
import CustomizeWorkoutPlan from "./routes/customizeWorkoutPlan";
import StartWorkoutLibrary from "./routes/workoutFromLibrary";
import WorkoutSummary from "./routes/workoutSummary";

import "./App.css";


export const userContext = createContext({});

function App() {
  const [isUserWorkingOut, setIsUserWorkingOut] = useState(false);
  const [timeLeftInWorkout, setTimeLeftInWorkout] = useState(0);
  const [currentWorkoutPlan, setCurrentWorkoutPlan] = useState<any[]>([]);
  const [isFromLibrary, setIsFromLibrary] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState<any>();

  return (
    <BrowserRouter>
      <ScrollTop />
      <userContext.Provider
        value={{
          currentWorkoutPlan,
          setCurrentWorkoutPlan,
          isUserWorkingOut,
          setIsUserWorkingOut,
          timeLeftInWorkout,
          setTimeLeftInWorkout,
          isFromLibrary,
          setIsFromLibrary,
          currentWorkout,
          setCurrentWorkout,
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in/*" element={<Signin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/start-workout" element={<StartWorkout />} />
          <Route path="/view-workout-plan" element={<ViewWorkoutPlan />} />
          <Route path="/workout-summary" element={<WorkoutSummary />} />
          <Route
            path="/start-workout-library"
            element={<StartWorkoutLibrary />}
          />
          <Route
            path="/customize-workout-plan"
            element={<CustomizeWorkoutPlan />}
          />
          <Route
            path="/library"
            element={
              <>
                <SignedIn>
                  <Library />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn redirectUrl="/" />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <Profile />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn redirectUrl="/" />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
