import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex my-2">
      <button className="btn btn-primary px-2">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
		<Link className="mr-12" to="/">
		Welcome to Premier University Debating Society.
		</Link>
		<Link className="mr-12" to="/">
		One of the prestigious debate club in the heart of port city Chittagong...
		</Link>
		<Link className="mr-12" to="/">
		Welcome to Premier University Debating Society.
		</Link>
		<Link className="mr-12" to="/">
		One of the prestigious debate club in the heart of port city Chittagong...
		</Link>
      </Marquee>
    </div>
  );
};
export default BreakingNews;