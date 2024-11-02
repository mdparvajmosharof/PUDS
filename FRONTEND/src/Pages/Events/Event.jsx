import UnderConstruction from "../../Shared/UnderConstruction";
import CurrentFest from "./CurrentFest";
import EventNews from "./EventNews";

const Event = () => {
	return (
		<div>
			<EventNews></EventNews>
			<CurrentFest></CurrentFest>
			{/* <UnderConstruction></UnderConstruction> */}
		</div>
	);
};

export default Event;