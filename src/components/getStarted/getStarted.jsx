import "./getStarted.scss";
import { useState } from "react";
import Button from "./button/button";

const GetStarted = (props) => {
  const [s, ss] = useState("");
  return (
    <section className="getStarted">
      <div className="getStarted__container">
        <div className="getStarted__container-content">
          <h3 className="getStarted__container-content-h3">Plan your life</h3>
          <h1 className="getStarted__container-content-h1">
            Get <b>started</b> now
          </h1>
          <p className="getStarted__container-content-p">
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata.
          </p>
          <div className="getStarted__container-content-buttons">
            <Button title={'View pricing'} />
            <Button title={'Read documentation'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
