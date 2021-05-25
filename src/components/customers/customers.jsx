import "./customers.scss";
// import bitbucket from "./src/bitbucket.svg";
// import apple from "./src/apple.svg";
// import facebook from "./src/facebook.svg";
// import atlassian from "./src/atlassian.svg";
// import audi from "./src/audi.svg";
import { ReactComponent as Bitbucket } from "./src/bitbucket.svg";
import { ReactComponent as Apple } from "./src/apple.svg";
import { ReactComponent as Facebook } from "./src/facebook.svg";
import { ReactComponent as Atlassian } from "./src/atlassian.svg";
import { ReactComponent as Audi } from "./src/audi.svg";

const Customers = (props) => {
  return (
    <section className="customers">
      <div className="customers__items">
        <Bitbucket key={1} />
        <Apple key={2} />
        <Facebook key={3} />
        <Atlassian key={4} />
        <Audi key={5} />
      </div>
    </section>
  );
};

export default Customers;
