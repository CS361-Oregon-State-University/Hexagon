import { useState, useEffect} from "react";
import ReactPlayer from "react-player/youtube";
import axios from "axios";

const exerciseCard = (props: {
  exercise: string;
  exerciseNumber: number;
  duration?: string;
  reps?: number;
  intensity?: string;
  sets?: string;
  weight?: string;
}) => {
  const [videoLinks, setVideoLink] = useState([]);
  const openVideoHelp = () => {
    window.open(videoLinks[props.exercise], '_blank', 'noopener,noreferrer');
  };
  useEffect(() => {
    axios.get("/getVideoLinks").then((res) => {
      setVideoLink(res.data);
    });
  }, []);

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title">
          Exercise {props.exerciseNumber}: {props.exercise}
        </h2>
        {props.sets && <p>Sets: {props.sets}</p>}
        {props.reps && <p>Reps: {props.reps}</p>}
        {props.weight && <p>Weight: {props.weight} lbs</p>}
        {props.duration && <p>Duration: {props.duration} sec</p>}
        {props.intensity && <p>Intensity: {props.intensity}</p>}
      
      </div>
      <button onClick={openVideoHelp} className="btn btn-info">
        Help
        </button> 
    </div>
  );
};

export default exerciseCard;
