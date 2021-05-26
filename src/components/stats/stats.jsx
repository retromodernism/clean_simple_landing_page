import "./stats.scss";
import left_icon from "./src/left-icon.svg";
import right_icon from "./src/right-icon.svg";

const Stats = (props) => {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__block stats__block_left">
          <img src={left_icon} alt="" className="stats__block-icon" />
          <h1 className="stats__block-h1">89%</h1>
          <p className="stats__block-p">
            Customers who have increased their productivity
          </p>
        </div>
        <div className="stats__block stats__block_right">
          <img src={right_icon} alt="" className="stats__block-icon" />
          <h1 className="stats__block-h1">3123</h1>
          <p className="stats__block-p">Users who have used our application</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
