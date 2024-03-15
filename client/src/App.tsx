import { useState, createContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Signin from "./routes/signin";
import Landing from "./routes/landing";
import Library from "./routes/library";
import Profile from "./routes/profile";
import Faq from "./routes/faq";
import ScrollTop from "./components/scrolltop";

import "./App.css";

export const userContext = createContext({});

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <userContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in/*" element={<Signin />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/library"
            element={
              <>
                <SignedIn>
                  <Library />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
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
                  <RedirectToSignIn />
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
