import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Event from "../Pages/Events/Event";
import Join from "../Pages/Join/Join";
const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/events",
			element: <Event></Event>
		},
		{
			path: "/join",
			element: <Join></Join>
		},
	  ]
	}
  ]);
export default routes;