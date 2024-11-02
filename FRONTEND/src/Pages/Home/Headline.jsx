import { Link } from "react-router-dom";
import { FaBullhorn, FaTimes, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Headline = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null; // Hide component when not visible

	return (
		<div className="relative flex items-center justify-between bg-violet-500 p-4 md:p-6 pr-12 rounded-lg shadow-lg gap-4">
			{/* Close button */}
			<button 
				className="absolute top-2 right-2 md:right-4 text-white hover:text-gray-300 transition"
				onClick={() => setIsVisible(false)}
				aria-label="Close"
			>
				<FaTimes className="text-2xl" />
			</button>

			{/* Message with icon */}
			<div className="flex items-center text-white">
				<FaBullhorn className="text-yellow-300 text-2xl mr-2" />
				<h3 className="text-base md:text-lg lg:text-xl font-semibold">
					Recruitment of new members is going on!
				</h3>
			</div>

			{/* Register Now button with icon */}
			<Link to="https://www.facebook.com/share/1nZvWtVSmzvkPShA/" target="_blank" className="flex items-center">
				<button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-bold px-4 py-2 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg text-sm md:text-base lg:text-lg">
					Register Now
					<FaArrowRight className="ml-2" />
				</button>
			</Link>
		</div>
	);
};

export default Headline;
