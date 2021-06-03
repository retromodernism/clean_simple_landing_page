import { useState } from "react";

const Li = (props) => {
  const [liIsCollapsed, setLiIsCollapsed] = useState(false);
  return (
    <li
      className="faq__content-list-leaf"
      className={
        liIsCollapsed
          ? "faq__content-list-leaf faq__content-list-leaf--collapsed"
          : "faq__content-list-leaf"
      }
    >
      <h1
        className="faq__content-list-leaf-title"
        onClick={() => setLiIsCollapsed(!liIsCollapsed)}
      >
        {props.title}
      </h1>
      <div className="faq__content-list-leaf-content">
        <p className="faq__content-list-leaf-content-p">{props.text}</p>
        <button className="faq__content-list-leaf-content-button">
          {props.button}
        </button>
      </div>
    </li>
  );
};

export default Li;
