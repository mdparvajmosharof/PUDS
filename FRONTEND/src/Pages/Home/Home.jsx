import Banner from "../../Shared/Banner";
import About from "./About";
import BreakingNews from "./BreakingNews";
import CurrentEvent from "./CurrentEvent";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<BreakingNews></BreakingNews>
			<About></About>
			<CurrentEvent></CurrentEvent>
		</div>
	);
};

export default Home;