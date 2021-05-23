import "./header__socials.scss";

import fb_icon from "./src/fb-icon.svg";
import tg_icon from "./src/tg-icon.svg";
import tw_icon from "./src/twitter-icon.svg";
import M_icon from "./src/M-icon.png";

const Header__socials = () => {
  return (
    <div className="header__socials">
      <a className="header__socials-link header__socials-link_fb" href="#" key={1}>
        <picture className="header__socials-icon">
          <source media="(min-width: 0px)" srcSet={fb_icon} />
          <img src="#" alt="" />
        </picture>
      </a>
      <a className="header__socials-link header__socials-link_tg" href="#" key={2}>
        <picture className="header__socials-icon">
          <source media="(min-width: 0px)" srcSet={tg_icon} />
          <img src="#" alt="" />
        </picture>
      </a>
      <a className="header__socials-link header__socials-link_tw" href="#" key={3}>
        <picture className="header__socials-icon">
          <source media="(min-width: 0px)" srcSet={tw_icon} />
          <img src="#" alt="" />
        </picture>
      </a>
      <a className="header__socials-link header__socials-link_M" href="#" key={4}>
        <picture className="header__socials-icon">
          <source media="(min-width: 0px)" srcSet={M_icon} />
          <img src="#" alt="" />
        </picture>
      </a>
    </div>
  );
};

export default Header__socials;
