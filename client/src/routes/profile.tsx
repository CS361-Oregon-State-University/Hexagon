import Navbar from "../components/navbar";
import { useUser } from "@clerk/clerk-react";

const profile = () => {
  const username = useUser().user?.username;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-neutral font-semibold mt-[50px]">
          Welcome {username}!
        </h1>
        
      </div>
    </>
  );
};

export default profile;
