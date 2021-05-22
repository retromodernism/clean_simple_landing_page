import "./header__nav.scss";

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

const Header__nav = () => {
  return (
    <nav className="header__nav">
      {menu_items.map((item, i) => (
        <a className="header__nav-link" href={item.href} key={i}>
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default Header__nav;
