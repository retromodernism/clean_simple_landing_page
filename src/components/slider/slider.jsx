import "./slider.scss";

import { Swiper, SwiperSlide } from "swiper/react";

const Slider = (props) => {
  return (
    <Swiper className="slider" >
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
