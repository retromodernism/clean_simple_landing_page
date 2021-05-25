import "./slider.scss";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/core";

import slide_bg_1 from "./src/slider__slide-bg.svg";
import slide_play_button from "./src/slider__slide-play_button.png";
import Slide_dot from "./slide_dot/slide__dot";

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

const sliderParams = {
  pagination: {
    clickable: true,
  },
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  effect: "fade",
};

const Slider = (props) => {
  return (
    <Swiper className="slider" {...sliderParams}>
      <SwiperSlide className="slider__slide" key={1}>
        <div
          className="slider__slide-content"
          style={{ backgroundImage: `url(${slide_bg_1})` }}
        >
          <div className="slider__slide-info">
            <div className="slider__slide-h3">Plan your life</div>
            <div className="slider__slide-h1">
              Increase your <b>productivity</b>
            </div>
            <div className="slider__slide-p">
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an, insolens gubergren similique est cu. Et vel
              modus congue vituperata.
            </div>
            <div className="slider__slide-play_button">
              <picture>
                <source media="(min-width: 0)" srcSet={slide_play_button} />
                <img src="#" alt="" />
              </picture>
            </div>
          </div>
          <div className="slider__slide-dots">
            <Slide_dot
              key={1}
              dotLeft={100}
              dotTop={520}
              lineHeight={190}
              lineTop={-154}
            />

            <Slide_dot
              key={2}
              dotLeft={508}
              dotTop={490}
              lineHeight={60}
              lineTop={-5}
            />

            <Slide_dot
              key={3}
              dotLeft={917}
              dotTop={349}
              lineHeight={190}
              lineTop={-41}
            />

            <Slide_dot
              key={4}
              dotLeft={1325}
              dotTop={236}
              lineHeight={317}
              lineTop={-127}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__slide" key={1}>
        <div
          className="slider__slide-content"
          style={{ backgroundImage: `url(${slide_bg_1})` }}
        >
          <div className="slider__slide-info">
            <div className="slider__slide-h3">Plan your life</div>
            <div className="slider__slide-h1">
              Increase your <b>productivity</b>
            </div>
            <div className="slider__slide-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              quidem consectetur nulla asperiores in fugit animi consequatur
              facilis tempora sint fugiat exercitationem distinctio, repellat,
              quam ad minus fuga corporis vitae?
            </div>
            {/* <div className="slider__slide-play_button">
              <picture>
                <source media="(min-width: 0)" srcSet={slide_play_button} />
                <img src="#" alt="" />
              </picture>
            </div> */}
          </div>
          <div className="slider__slide-dots">
            <Slide_dot
              key={1}
              dotLeft={100}
              dotTop={520}
              lineHeight={190}
              lineTop={-154}
            />

            <Slide_dot
              key={2}
              dotLeft={508}
              dotTop={490}
              lineHeight={60}
              lineTop={-5}
            />

            <Slide_dot
              key={3}
              dotLeft={917}
              dotTop={349}
              lineHeight={190}
              lineTop={-41}
            />

            <Slide_dot
              key={4}
              dotLeft={1325}
              dotTop={236}
              lineHeight={317}
              lineTop={-127}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
