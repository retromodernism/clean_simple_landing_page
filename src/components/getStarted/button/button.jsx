import { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`getStarted__container-content-button${
        hover ? " getStarted__container-content-button--hover" : ""
      } `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.title}
    </button>
  );
};

export default Button;
