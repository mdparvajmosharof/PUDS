import { Outlet } from "react-router-dom";
import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Root;