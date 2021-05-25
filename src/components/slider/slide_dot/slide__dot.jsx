import "./slide_dot.scss";
import slide_dot from "./src/slider__slide-dot.png";
import slide_dot_board_img from "./src/slider__slide-dot_board_img.svg";
import { useState } from "react";

const Slide_dot = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="slider__slide-dot slider__slide-dot--1"
      style={{
        left: props.dotLeft,
        top: props.dotTop,
      }}
    >
      <div className="slider__slide-dot_content">
        <div
          className="slider__slide-dot_line"
          style={{
            height: props.lineHeight,
            width: 1,
            top: props.lineTop,
            left: 7,
          }}
        ></div>
        <img
          className="slider__slide-dot_pointer"
          src={slide_dot}
          alt=""
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        />
        <div
          className={
            hovered
              ? "slider__slide-dot_board slider__slide-dot_board--hover"
              : "slider__slide-dot_board"
          }
        >
          <img src={slide_dot_board_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slide_dot;
