import "./About.scss";

import picture from "../../assets/images/Picture1.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About me</h2>
      <div className="about__container">
        <img
          className="about__container--img"
          src={picture}
          alt="profilePicture"
        />
        <div>
          <p className="about__container--highlighted">Hello! </p>
          <p>
            I am a Software Developer with a passion for problem-solving,
            currently undertaking the Consultancy Programe at _Nology as I thrive
            on challenging myself.
          </p>
          <p>
            I graduated from Brunel University in 2021 with a 2:1 Bachelors of
            Engineering Degree in Electronic and Electrical Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
