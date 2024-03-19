import { Link } from "react-router-dom";

type workoutCards = {
  name: string;
  length: number;
  intensity: string;
  type: string;
};

const workoutCards = ({ name, length, intensity, type }: workoutCards) => {
  const time = length / 60;
  console.log(time, length);

  return (
    <Link
      to="/"
      className="transform transition-transform hover:translate-y-[-15px] hover:duration-500 hover:ease-in-out"
    >
      <div className="card w-72 bg-base-100 shadow-xl hover:shadow-2xl transform transition-shadow">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <div className="card-actions flex flex-row items-center">
            <div>
              <p>Time: </p>
              <div className="badge badge-accent">{time}mins</div>
            </div>
            <div>
              <p>Intensity: </p>
              <div className="badge badge-accent">{intensity}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default workoutCards;
