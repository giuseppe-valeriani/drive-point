import React from "react";
import "./Skill.scss";

const definedValue = ["not yet given", "introduced", "capable", "independent"];

const Skill = ({ skill }) => {
  return <span className="pupil__value">{definedValue[skill]}</span>;
};

export default Skill;
