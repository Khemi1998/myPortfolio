import "./Nav.scss";
import menu from "../../assets/images/hamburger.svg";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  console.log(showNav);
  return (
    <>
      {showNav && <NavMenu toggleNav={toggleNav} />}

      <img onClick={toggleNav} className="nav" src={menu} alt="menu" />

      <div className="nav__content">
        <ul className="nav__content__links">
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#home">
              Home
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#about">
              About me
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
