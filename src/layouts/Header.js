import { useContext, useEffect, useState } from "react";
import NavContext from "../context/navContext";
import useClickOutside from "../useClickOutside";
import useWindowSize from "../useWindowSize";

const menus = [
  { icon: "fa fa-home", dkMenuName: "Home", name: "Home", id: "home" },
  //{ icon: "fa fa-user", dkMenuName: "Sobre Min", name: "Sobre Min", id: "about" },
  {
    icon: "fa fa-briefcase",
    dkMenuName: "Lista Atleta",
    name: "Lista Atleta",
    id: "work",
  },
  {
    icon: "fa fa-envelope-open",
    dkMenuName: "Inscrever",
    name: "Inscrever",
    id: "contact",
  },
  { icon: "fa fa-comments", dkMenuName: "Blog", name: "Blog", id: "blog" },
];

const Header = ({ light }) => {
  const [toggle, setToggle] = useState(false);
  const { changeNav, nav, changeMobileMenu, mobileMenu } =
    useContext(NavContext);
  useEffect(() => {
    let path = window.location.hash,
      newpath = path.split("#").pop();
    return () => {
      changeNav(newpath ? newpath : "home");
    };
  }, []);
  const { width } = useWindowSize();

  // outside click
  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  return (
    <header id="header">
      <div className="nav-container">
          <img
            className="mobeLogo"
            src="img/LogoTheBestWhiteText.png"
            alt=""
          />
        <div>
          {/* Mobile Navigation Starts */}
          <ul id="nav" className="navigation">
            {menus.map((menu, i) => (
              <li className={nav === menu.id ? "active" : ""} key={i}>
                <div>
                  <a
                    onClick={() => {
                      changeNav(menu.id);
                      changeMobileMenu(width < 1025 ? true : false);
                    }}
                    id={`link-${menu.id}`}
                    href={`#${menu.id}`}
                    className={nav === menu.id ? "active" : ""}
                  >
                    <i className={`${menu.icon}`} />
                    <span>{menu.name}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {/* Mobile Navigation Ends */}
        </div>
      </div>
      {/* Stretchy Navigation Starts */}
      <div
        ref={domNode}
        className={`cd-stretchy-nav ${toggle ? "nav-is-visible" : ""} ${
          light ? nav == "home" && "lighter" : ""
        }`}
      >
        <a
          className="cd-nav-trigger"
          onClick={() => setToggle(!toggle)}
          href="#"
        >
          <span aria-hidden="true" />
        </a>
        <ul className="stretchy-nav">
          {menus.map((menu, i) => (
            <li className={nav == menu.id ? "active" : ""} key={i}>
              <a
                href={`#${menu.id}`}
                onClick={() => {
                  changeNav(menu.id);
                  setToggle(false);
                }}
              >
                <span>{menu.dkMenuName}</span>
              </a>
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="stretchy-nav-bg" />
      </div>
      {/* Stretchy Navigation Ends */}
    </header>
  );
};
export default Header;
