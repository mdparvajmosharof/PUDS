import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";   // npm install swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import e from "../../src/assets/Images/cover1.jpg";
import h from "../../src/assets/Images/debate1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-60 md:h-96 lg:h-[600px] bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={e}
              alt="Library Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-4xl text-white font-bold">
			    Boost your Public Speaking Skill
              </h2>
              <Link to='/join'>
			     <button className="btn btn-secondary text-white font-bold mt-2">Join</button>
			  </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={h}
              alt="Library Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-4xl text-white font-bold">
			    Be a Part of the Legacy
              </h2>
			  <Link to='/join'>
			     <button className="btn btn-secondary text-white font-bold mt-2">Join</button>
			  </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;


