import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const EventNews = () => {
  return (
    <div className="flex my-2">
      <button className="btn btn-primary px-2">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
		<Link className="mr-12" to="/">
		6th PUDS Gateway is coming...
		</Link>
		<Link className="mr-12" to="/">
		PUDS has successfully organized the PUDS National Debate Fest 2024
		</Link>
		<Link className="mr-12" to="/">
		6th PUDS Gateway is coming...
		</Link>
		<Link className="mr-12" to="/">
		PUDS has successfully organized the PUDS National Debate Fest 2024
		</Link>
		
      </Marquee>
    </div>
  );
};
export default EventNews;