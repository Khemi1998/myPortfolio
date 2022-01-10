import React from "react";
import "./Button.scss";

const Button = props => {
  const { buttonText, isSecondary, link } = props;

  let buttonStyle = "button";

  if (isSecondary? buttonStyle += " secondary" : buttonStyle += " primary")

  // if (isSecondary) {
  //   buttonStyle += " secondary";
  // } else {
  //   buttonStyle += " primary";
  // }

  return <a href={link}>
    <button className={buttonStyle}>{buttonText}</button>
  </a> 
  
};

export default Button;
