const exerciseCard = (props: {
  exercise: string;
  exerciseNumber: number;
  duration?: string;
  reps?: number;
  intensity?: string;
  sets?: string;
  weight?: string;
}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title">
          Exercise {props.exerciseNumber}: {props.exercise}
        </h2>
        {props.sets && <p>Sets: {props.sets}</p>}
        {props.weight && <p>Weight: {props.weight} lbs</p>}
        {props.duration && <p>Duration: {props.duration} sec</p>}
      </div>
    </div>
  );
};

export default exerciseCard;
