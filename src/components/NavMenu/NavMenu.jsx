import "./NavMenu.scss";
import cross from "../../assets/images/cross.svg";

const NavMenu = (props) => {
  const { toggleNav } = props;

  return (
    <>
      <div className="nav-menu">
        <div className="nav-menu__content">
          <img
            src={cross}
            alt="Close menu"
            className="nav-menu__cross"
            onClick={toggleNav}
          />
          <ul onClick={toggleNav} class="nav-menu__links">
            <li class="nav-menu__links__list">
              <a class="nav-menu__links--link" href="#home">Home</a>
            </li>
            <li class="nav-menu__links__list">
              <a class="nav-menu__links--link" href="#projects">Projects</a>
            </li>
            <li class="nav-menu__links__list">
              <a class="nav-menu__links--link" href="#about">About me</a>
            </li>
            <li class="nav-menu__links__list">
              <a class="nav-menu__links--link" href="#skills">Skills</a>
            </li>
            <li class="nav-menu__links__list">
              <a class="nav-menu__links--link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
