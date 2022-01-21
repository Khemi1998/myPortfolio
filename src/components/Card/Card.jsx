import "./Card.scss";

import Button from "../Button/Button";

const Card = (props) => {
  const { index, image, title, description, skills, page, code } = props;

  const skill = skills.map((skill) => {
    return <span className="card__content--skill">{skill} </span>;
  });

  return (
    <div key={index} className="card">
      <div className="card__content">
        <img className="card__content--img" src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        {skill}
        <div className="card__buttons">
          <Button buttonText="page" isSecondary={true} link={page} />
          <Button buttonText="code" isSecondary={false} link={code} />
        </div>
      </div>
    </div>
  );
};

export default Card;
