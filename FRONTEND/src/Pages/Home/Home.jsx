import Banner from "../../Shared/Banner";
import About from "./About";
import BreakingNews from "./BreakingNews";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<BreakingNews></BreakingNews>
			<About></About>
		</div>
	);
};

export default Home;