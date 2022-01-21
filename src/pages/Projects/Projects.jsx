import Card from "../../components/Card/Card";
import "./Projects.scss";
import swipe from "../../assets/images/swipe-horizontal.svg";
import calculatorImg from "../../assets/images/project-img/calculator.png";
import shapeInvaders from "../../assets/images/project-img/shapeinvaders.png";
import morse from "../../assets/images/project-img/morse.png";
import ticketTracker from "../../assets/images/project-img/ticketTracker.png";
import punk from "../../assets/images/project-img/punk.png";

const Projects = () => {
  const projects = [
    {
      image: calculatorImg,
      title: "Calculator",
      description: "A calculator capable of performing basic functions.",
      skills: ["HTML", "SASS", "JAVASCRIPT"],
      page: "https://khemi1998.github.io/calculator/",
      code: "https://github.com/Khemi1998/calculator",
    },
    {
      image: shapeInvaders,
      title: "Shape Invaders",
      description: "My rendition on the game Shape-Invaders.",
      skills: ["HTML", "SASS", "JAVASCRIPT"],
      page: "https://khemi1998.github.io/SpaceInvaders/",
      code: "https://github.com/Khemi1998/SpaceInvaders.git",
    },
    {
      image: morse,
      title: "Morse-Code Translater",
      description: "A english to morse-code translater.",
      skills: ["HTML", "SASS", "JAVASCRIPT", "TDD", "JEST"],
      page: "https://khemi1998.github.io/MorseCodeTranslation/",
      code: "https://github.com/Khemi1998/MorseCodeTranslation",
    },
    {
      image: ticketTracker,
      title: "Ticket Tracker",
      description: "A english to morse-code translater.",
      skills: ["REACT", "HTML", "SASS", "JAVASCRIPT"],
      page: "https://khemi1998.github.io/ticketTracker/",
      code: "https://github.com/Khemi1998/ticketTracker",
    },
    {
      image: punk,
      title: "Punk API",
      description: "A page capable of searching and filtering the punk API.",
      skills: ["REACT", "API", "HTML", "SASS", "JAVASCRIPT"],
      page: "https://khemi1998.github.io/punk_api/",
      code: "https://github.com/Khemi1998/punk_api",
    },
  ];

  const projectList = projects.map((project, index) => {
    return (
      <Card
        index={index}
        image={project.image}
        title={project.title}
        description= {project.description}
        skills={project.skills}
        page={project.page}
        code={project.code}
      />
    );
  });

  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__container">
        <div className="projects__container__carousel">
          {projectList}
        </div>
        <img className="projects__container--swipe" src={swipe} alt="swipe" />
      </div>
    </div>
  );
};

export default Projects;
