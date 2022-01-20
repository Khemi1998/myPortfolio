import "./Nav.scss";
import menu from "../../assets/images/hamburger.svg";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {showNav && <NavMenu toggleNav={toggleNav} />}
      <img className="nav" src={menu} alt="menu" />

      <div className="nav__content">
        <ul class="nav__content__links">
          <li class="nav__content__links__list">
            <a class="nav__content__links--link" href="#home">
              Home
            </a>
          </li>
          <li class="nav__content__links__list">
            <a class="nav__content__links--link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav__content__links__list">
            <a class="nav__content__links--link" href="#about">
              About me
            </a>
          </li>
          <li class="nav__content__links__list">
            <a class="nav__content__links--link" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav__content__links__list">
            <a class="nav__content__links--link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
