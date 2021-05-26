import "./features.scss";
import bg from "./src/clouds.png";
import overview from "./src/overview.svg";
import files from "./src/files.svg";
import chats from "./src/chats.svg";
import events from "./src/events.svg";

const Features = () => {
  return (
    <section className="features">
      <img src={bg} alt="" className="features__background" />
      <div className="features__container">
        <div className="features__info">
          <h3 className="features__info-h3">About Us</h3>
          <h1 className="features__info-h1">Read about our app</h1>
          <div className="features__info-features">
            <div className="features__info-feature" key={1}>
              <img
                src={overview}
                alt=""
                className="features__info-feature-img"
              />
              <h2 className="features__info-feature-h2">Overview</h2>
              <p className="features__info-feature-p">
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              </p>
            </div>
            <div className="features__info-feature" key={2}>
              <img src={files} alt="" className="features__info-feature-img" />
              <h2 className="features__info-feature-h2">Files</h2>
              <p className="features__info-feature-p">
                No vim nulla vitae intellegat. Ei enim error ius, solet atomorum
                conceptam ex has.
              </p>
            </div>
            <div className="features__info-feature" key={3}>
              <img src={chats} alt="" className="features__info-feature-img" />
              <h2 className="features__info-feature-h2">Meeting chats</h2>
              <p className="features__info-feature-p">
                Vim ne tacimates neglegentur. Erat diceret omittam at est.
              </p>
            </div>
            <div className="features__info-feature" key={4}>
              <img src={events} alt="" className="features__info-feature-img" />
              <h2 className="features__info-feature-h2">Save events</h2>
              <p className="features__info-feature-p">
                Nisl idque mel ea, nominati voluptatum.
              </p>
            </div>
          </div>
          <div className="features__info-buttons">
            <button
              className="features__info-buttons-button"
              style={{
                background: "#FFD7D7",
                color: "#D43F3F",
              }}
            >
              Read more
            </button>
            <div className="features__info-buttons-separator">Or</div>
            <button
              className="features__info-buttons-button"
              style={{
                background: "#D2E1FF",
                color: "#3A79FF",
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
