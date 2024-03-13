import { Link } from "react-router-dom";

const workoutCards = () => {
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
            Pushup
            <div className="badge badge-secondary">Cardio</div>
          </h2>
          <p>
            an exercise in which a person lies facing the floor and, keeping
            their back straight, raises their body by pressing down on their
            hands
          </p>
          <div className="card-actions flex flex-row items-center">
            <div>
              <p>Time: </p>
              <div className="badge badge-accent">25 min</div>
            </div>
            <div>
              <p>Equipment: </p>
              <div className="badge badge-accent">Yoga Mat</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default workoutCards;
