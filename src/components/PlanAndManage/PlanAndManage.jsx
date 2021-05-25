import "./PlanAndManage.scss";
import bg from "./src/bg.png";
import bg_shadow from "./src/bg-shadow.png";

const PlanAndManage = () => {
  return (
    <section className="plan_and_manage">
      <div className="plan_and_manage-container">
        <div className="plan_and_manage__info">
          <h3 className="plan_and_manage__info-h3">DESKTOP AND MOBILE APP</h3>
          <h1 className="plan_and_manage__info-h1">
            <b>Plan</b> and <b>manage</b>
          </h1>
          <p className="plan_and_manage__info-p">
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>
          <div className="plan_and_manage__info-buttons">
            <button className="plan_and_manage__info-button">View video</button>
            <button className="plan_and_manage__info-button">
              See features
            </button>
          </div>
        </div>
        <picture className="plan_and_manage__picture">
          <source media="(min-width: 0px)" srcSet={bg_shadow} />
          <img className="plan_and_manage__picture-img" src="#" alt="" />
        </picture>
      </div>
    </section>
  );
};

export default PlanAndManage;
