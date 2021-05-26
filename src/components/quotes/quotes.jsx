import "./quotes.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core";

import slide_img from "./src/slide_img.png";
import slide_testuserpic from "./src/testuserpic.jpg";

const sliderParams = {
  pagination: {
    clickable: true,
  },
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  slidesPerView: 2,
  spaceBetween: 64,
};

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Quotes = (props) => {
  return (
    <section className="quotes">
      <div className="quotes__container">
        <div className="quotes__info">
          <h3 className="quotes__info-h3">Testimonials</h3>
          <h1 className="quotes__info-h1">Customer's quotes</h1>
          <p className="quotes__info-p">
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </p>
        </div>
        <Swiper className="quotes__slider" {...sliderParams}>
          <SwiperSlide className="quotes__slider-slide" key={1}>
            <p className="quotes__slider-slide-p">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
              usu vidit tractatos, vero tractatos ius an, in mel diceret
              persecuti.
            </p>
            <img src={slide_img} alt="" className="quotes__slider-slide-img" />
          </SwiperSlide>
          <SwiperSlide className="quotes__slider-slide" key={2}>
            <p className="quotes__slider-slide-p">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
              usu vidit tractatos, vero tractatos ius an, in mel diceret
              persecuti.
            </p>
            <img src={slide_testuserpic} alt="" className="quotes__slider-slide-img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Quotes;
