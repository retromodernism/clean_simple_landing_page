import "./blog.scss";
import slide_img from "./src/blog_slide_img.png";

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

const sliderParams = {
  pagination: {
    clickable: true,
  },
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  effect: "fade",
  slidesPerView: 1,
  navigation: true,
};

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog__container">
        <h3 className="blog__h3">Our Resources</h3>
        <h2 className="blog__h2">Startreading out blog</h2>
        <Swiper className="blog__slider" {...sliderParams}>
          <SwiperSlide className="blog__slider-slide" key={1}>
            <div className="blog__slider-slide-content">
              <img src={slide_img} alt="" className="blog__slider-slide-img" />
              <div className="blog__slider-slide-info">
                <h1 className="blog__slider-slide-info-h1">
                  How to start planning
                </h1>
                <p className="blog__slider-slide-info-p">
                  Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                  Eu usu vidit tractatos, vero tractatos ius an, in mel diceret
                  persecuti. Natum petentium principes mei ea. Tota everti
                  periculis vis ei, quas tibique pro at, eos ut decore ...
                </p>
                <div className="blog__slider-slide-info-bottom">
                  <button className="blog__slider-slide-button">
                    Read Now
                  </button>
                  <div className="blog__slider-slide-bookmarks">
                    Add to your bookmarks
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blog__slider-slide" key={2}>
            <div className="blog__slider-slide-content">
              <img src={slide_img} alt="" className="blog__slider-slide-img" />
              <div className="blog__slider-slide-info">
                <h1 className="blog__slider-slide-info-h1">
                  How to start planning
                </h1>
                <p className="blog__slider-slide-info-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae a deserunt soluta ducimus temporibus similique expedita
                  dolorum, quos sequi, est eos error veniam fugiat itaque,
                  tempora corrupti reprehenderit possimus facere.
                </p>
                <div className="blog__slider-slide-info-bottom">
                  <button className="blog__slider-slide-button">
                    Read Now
                  </button>
                  <div className="blog__slider-slide-bookmarks">
                    Add to your bookmarks
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
