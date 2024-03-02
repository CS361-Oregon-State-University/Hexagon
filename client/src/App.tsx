import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState<any>("");
  const [newUser, setNewUser] = useState<string>("");
  const [signedIn, setSignedIn] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const updateRes = (result: any) => {
    setRes(result);
  };

  const getRes = async () => {
    const { data: response } = await axios.get("/username");
    updateRes(response.username);
  };

  const handleUpdateUsername = () => {
    axios.post("/updateUsername", { username: newUser });
    getRes();
    setNewUser("");
  };

  const handleLogin = async () => {
    const { data: response } = await axios.get("/loginInfo");
    if (
      response.username === loginUsername &&
      response.password === loginPassword
    ) {
      setSignedIn(true);
    } else {
      window.Error("error signing in, please use correct password or username");
    }

    getRes();
    console.log(signedIn);

    setLoginPassword("");
    setLoginUsername("");
  };

  const handleSignout = () => {
    setSignedIn(false);
    setLoginPassword("");
    setLoginUsername("");
    setNewUser("");
  };

  return (
    <>
      {!signedIn && (
        <div className="flex justify-center m-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.currentTarget.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.currentTarget.value)}
            />
          </label>
          <button className="btn btn-secondary mx-4" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}

      {signedIn && (
        <>
          <h1>Vite + React</h1>
          <button className="btn btn-accent" onClick={handleSignout}>
            Sign out
          </button>
          <button className="btn btn-primary" onClick={getRes}>
            res is {res}
          </button>
          <div className="m-4 flex justify-center">
            <input
              placeholder="username"
              className="input input-primary"
              value={newUser}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setNewUser(e.currentTarget.value)
              }
            />
            <button className="btn btn-success" onClick={handleUpdateUsername}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
