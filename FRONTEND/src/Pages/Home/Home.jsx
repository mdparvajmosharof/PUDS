import Banner from "../../Shared/Banner";
import About from "./About";
import BreakingNews from "./BreakingNews";
import CurrentEvent from "./CurrentEvent";
import CurrentPanel from "./CurrentPanel";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<BreakingNews></BreakingNews>
			<About></About>
			<CurrentEvent></CurrentEvent>
			<CurrentPanel />
		</div>
	);
};

export default Home;