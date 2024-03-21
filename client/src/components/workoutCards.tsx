import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import { useNavigate } from "react-router-dom";

type workoutCards = {
  name: string;
  length?: number;
  intensity?: string;
  type: string;
  sets?: number;
  reps?: number;
  setIsFromLibrary: any;
  isUserWorkingOut: boolean;
  weight?: number;
  videoLink: string;
};

const handleExerciseFromCard = (setIsFromLibrary: any, navigate: any) => {
  setIsFromLibrary(true);
  navigate("/start-workout");
};

const handleAddExerciseToWorkoutPlan = (workoutObj: any) => {
  axios.post("/addExerciseToWorkoutPlan", workoutObj).then(() => {
    console.log("added");
  });
};

const workoutCards = ({
  name,
  length,
  intensity,
  type,
  sets,
  reps,
  weight,
  setIsFromLibrary,
  isUserWorkingOut,
  videoLink,
}: workoutCards) => {
  const navigate = useNavigate();

  const time = length ? length / 60 : 0;

  return (
    <button className="transform transition-transform hover:translate-y-[-15px] hover:duration-500 hover:ease-in-out">
      <div className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transform transition-shadow mb-2">
        <figure>
          <ReactPlayer url={videoLink} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <div className="card-actions flex flex-row items-center">
            {length && (
              <div>
                <p>Time: </p>
                <div className="badge badge-accent">{time}mins</div>
              </div>
            )}
            {!length && (
              <>
                <div>
                  <p>Sets: </p>
                  <div className="badge badge-accent">{sets}</div>
                </div>
                <div>
                  <p>Reps: </p>
                  <div className="badge badge-accent">{reps}</div>
                </div>
              </>
            )}
            {weight && (
              <div>
                <p>Weight: </p>
                <div className="badge badge-accent">{weight}</div>
              </div>
            )}
            {intensity && (
              <div>
                <p>Intensity: </p>
                <div className="badge badge-accent">{intensity}</div>
              </div>
            )}
          </div>
        </div>
        <div className="join flex ">
          <button
            className="btn btn-success w-36 ml-2 mr-4"
            disabled={isUserWorkingOut}
            onClick={() => handleExerciseFromCard(setIsFromLibrary, navigate)}
          >
            Start this exercise
          </button>
          <button
            className="btn btn-info w-36"
            disabled={isUserWorkingOut}
            onClick={() =>
              handleAddExerciseToWorkoutPlan({
                type: type,
                name: name,
                length: length,
                intensity: intensity,
                sets: sets,
                reps: reps,
                weight: weight,
              })
            }
          >
            Add to today's workout
          </button>
        </div>
      </div>
    </button>
  );
};

export default workoutCards;
