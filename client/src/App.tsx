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

import "./App.css";

export const userContext = createContext({});

function App() {
  const [isUserWorkingOut, setIsUserWorkingOut] = useState(false);
  const [timeLeftInWorkout, setTimeLeftInWorkout] = useState(0);
  const [currentWorkoutPlan, setCurrentWorkoutPlan] = useState([]);

  return (
    <BrowserRouter>
      <ScrollTop />
      <userContext.Provider
        value={{
          isUserWorkingOut,
          setIsUserWorkingOut,
          timeLeftInWorkout,
          setTimeLeftInWorkout,
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in/*" element={<Signin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/start-workout" element={<StartWorkout />} />
          <Route path="/view-workout-plan" element={<ViewWorkoutPlan />} />
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
