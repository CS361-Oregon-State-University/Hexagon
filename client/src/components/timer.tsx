import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router";
import axios from "axios";

interface MyTimerProps {
  expiryTimestamp: Date;
  onTimerFinish: () => void;
}

const MyTimer: React.FC<MyTimerProps> = ({
  expiryTimestamp,
  onTimerFinish,
}) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      onTimerFinish();
      navigate("/workout-summary");
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        axios
          .post("/updateWorkoutTime", { timeLeft: totalSeconds })
          .then((res) => {
            console.log("Time updated successfully.");
          })
          .catch((error) => {
            console.error("Error updating time:", error);
          });
      }, 749); // Send update every 749 milliseconds
    }

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  const restartTimer = () => {
    axios.get("/calculateWorkoutTime").then((res) => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + res.data);
      restart(time);
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "50px" }} className="m-6">
        <span>{hours < 10 ? "0" + hours : hours}</span>:
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
      <div className="join">
        <button onClick={pause} className="btn btn-neutral m-1">
          Pause
        </button>
        <button onClick={resume} className="btn btn-neutral m-1">
          Resume
        </button>
        <button onClick={restartTimer} className="btn btn-neutral m-1">
          Restart
        </button>
      </div>
    </div>
  );
};

export default MyTimer;
