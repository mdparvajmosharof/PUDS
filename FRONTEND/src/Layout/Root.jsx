import { Outlet } from "react-router-dom";
import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Headline from "../Pages/Home/Headline";

const Root = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<Headline></Headline>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Root;