import "./footer.scss";
import logo from "./../header/src/logo.png";

import fb_icon from "./../header/__header__socials/src/fb-icon.svg";
import tg_icon from "./../header/__header__socials/src/tg-icon.svg";
import tw_icon from "./../header/__header__socials/src/twitter-icon.svg";
import M_icon from "./../header/__header__socials/src/M-icon.png";

const menu_items = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Documentation",
    href: "#",
  },
];

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} alt="footer__container-logo" />
        <nav className="footer__container-nav">
          {menu_items.map((item, i) => (
            <a className="footer__container-nav-link" href={item.href} key={i}>
              {item.title}
            </a>
          ))}
        </nav>
        <div className="footer__container-socials">
          <a
            className="footer__container-socials-link footer__container-socials-link_fb"
            href="#"
            key={1}
          >
            <picture className="footer__container-socials-icon">
              <source media="(min-width: 0px)" srcSet={fb_icon} />
              <img src="#" alt="" />
            </picture>
          </a>
          <a
            className="footer__container-socials-link footer__container-socials-link_tg"
            href="#"
            key={2}
          >
            <picture className="footer__container-socials-icon">
              <source media="(min-width: 0px)" srcSet={tg_icon} />
              <img src="#" alt="" />
            </picture>
          </a>
          <a
            className="footer__container-socials-link footer__container-socials-link_tw"
            href="#"
            key={3}
          >
            <picture className="footer__container-socials-icon">
              <source media="(min-width: 0px)" srcSet={tw_icon} />
              <img src="#" alt="" />
            </picture>
          </a>
          <a
            className="footer__container-socials-link footer__container-socials-link_M"
            href="#"
            key={4}
          >
            <picture className="footer__container-socials-icon">
              <source media="(min-width: 0px)" srcSet={M_icon} />
              <img src="#" alt="" />
            </picture>
          </a>
        </div>
        <div className="footer__container-button-wrapper">
          <button className="footer__container-button">Get started</button>
        </div>
        <div className="footer__container-copyright">
          Copyright © 2018 By Random Site
        </div>
      </div>
    </footer>
  );
};

export default Footer;
