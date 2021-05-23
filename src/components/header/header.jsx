import "./header.scss";
import Header__button from "./__header__button/header__button";
import Header__nav from "./__header__nav/header__nav";
import Header__socials from "./__header__socials/header__socials";
import logo from "./src/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <picture className="header__logo">
          <source media="(min-width: 0px)" srcSet={logo} />
          <img src="#" alt="logo" />
        </picture>
        <Header__nav />
        <Header__socials />
        <Header__button />
      </div>
    </header>
  );
};

export default Header;
