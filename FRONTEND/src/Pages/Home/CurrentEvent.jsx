import { Link } from "react-router-dom";
import a from "../../../src/assets/Events/gatewayCover1.jpg";
import { FaArrowRight } from "react-icons/fa";

const CurrentEvent = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="my-4 font-bold text-3xl text-center">Current Event</h2>
	  <span className="block w-full h-1 bg-violet-500 absolute bottom-0 left-0 transform translate-y-1/2"></span>
      <Link to="/events">
        <img
          src={a}
          alt="Current Event"
          className="my-4 max-w-full h-auto rounded-lg shadow-md"
        />
      </Link>
      <Link to="/events">
        <button className="flex items-center text-blue-500 underline hover:text-blue-700 mt-4 px-4 py-2 rounded-none">
          <h3 className="mr-2 text-2xl">View Event</h3>
          <FaArrowRight className="text-blue-500" />
        </button>
      </Link>
    </div>
  );
};

export default CurrentEvent;
