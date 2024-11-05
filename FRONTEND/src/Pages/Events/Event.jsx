import UnderConstruction from "../../Shared/UnderConstruction";
import Headline from "../Home/Headline";
import CurrentFest from "./CurrentFest";
import EventNews from "./EventNews";

const Event = () => {
	return (
		<div>
			<EventNews></EventNews>
			<CurrentFest></CurrentFest>
			{/* <UnderConstruction></UnderConstruction> */}
			<div className="my-4">
			   <Headline></Headline>
			</div>
		</div>
	);
};

export default Event;