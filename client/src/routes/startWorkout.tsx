import Navbar from "../components/navbar";
import { useUser } from "@clerk/clerk-react";
import { CSSProperties } from 'react';
import { MyTimer } from "../components/timer";
import ExerciseCard from "../components/exerciseCard";

const startWorkout = () => {
    const username = useUser().user?.username;
    const userImg = useUser().user?.imageUrl;
    const userId = useUser().user?.id;
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4">
                    <div className="card-body items-center">
                        <MyTimer expiryTimestamp={time} />
                        {/* <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 } as CSSProperties}></span>:
                            <span style={{ "--value": 24 } as CSSProperties}></span>:
                            <span style={{ "--value": 27 } as CSSProperties}></span>
                        </span> */}
                    </div>
                </div>
                <ExerciseCard exerciseNumber="1" exercise='Running' duration='24'/>
                <ExerciseCard exerciseNumber="2" exercise='Bench Press' sets='5 x 5' weight='180 lbs'/>
                <ExerciseCard exerciseNumber="3" exercise='Squat' sets='5 x 5' weight='180 lbs'/>
                <button className="btn btn-success mt-6">Finish workout</button>
            </div>
        </>
    );
};

export default startWorkout;

