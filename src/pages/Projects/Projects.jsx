import Card from "../../components/Card/Card";
import "./Projects.scss";
import swipe from "../../assets/images/swipe-horizontal.svg";

import calculatorImg from "../../assets/images/project-img/calculator.png";
import shapeInvaders from "../../assets/images/project-img/shapeinvaders.png";
import morse from "../../assets/images/project-img/morse.png";
import ticketTracker from "../../assets/images/project-img/ticketTracker.png";
import punk from "../../assets/images/project-img/punk.png";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__container">
        <div className="projects__container__carousel">
          <Card
            image={calculatorImg}
            title="Calculator"
            description="A calculator capable of performing basic functions."
            skills={["HTML", "SASS", "JAVASCRIPT"]}
            page="https://khemi1998.github.io/calculator/"
            code="https://github.com/Khemi1998/calculator"
          />
          <Card
            image={shapeInvaders}
            title="Shape Invaders"
            description="My rendition on the game Shape-Invaders."
            skills={["HTML", "SASS", "JAVASCRIPT"]}
            page="https://khemi1998.github.io/SpaceInvaders/"
            code="https://github.com/Khemi1998/SpaceInvaders.git"
          />
          <Card
            image={morse}
            title="Morse-Code Translater"
            description="A english to morse-code translater."
            skills={["HTML", "SASS", "JAVASCRIPT", "TDD", "JEST"]}
            page="https://khemi1998.github.io/MorseCodeTranslation/"
            code="https://github.com/Khemi1998/MorseCodeTranslation"
          />
          <Card
            image={ticketTracker}
            title="Ticket Tracker"
            description="Capable of keeping a track of tickets from numerous employees."
            skills={["REACT", "HTML", "SASS", "JAVASCRIPT"]}
            page="https://khemi1998.github.io/ticketTracker/"
            code="https://github.com/Khemi1998/ticketTracker"
          />
          <Card
            image={punk}
            title="Punk API"
            description="A page capable of searching and filtering the punk API."
            skills={["REACT", "API", "HTML", "SASS", "JAVASCRIPT"]}
            page="https://khemi1998.github.io/punk_api/"
            code="https://github.com/Khemi1998/punk_api"
          />
        </div>
        <img className="projects__container--swipe" src={swipe} alt="swipe" />
      </div>
    </div>
  );
};

export default Projects;
