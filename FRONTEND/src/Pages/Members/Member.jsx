import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";

const Member = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="text-center">
            {" "}
            <h2 className="font-bold text-xl">Tahid Sohrawardy Omi</h2>
            <p className="text-gray-600">Founder,CEO</p>
            <div className="flex justify-center gap-7 my-5">
              <img src={facebook} className="w-8 " />
              <img src={linkedin} className="w-8 " />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Member;
