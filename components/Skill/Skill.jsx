import React, { useState } from "react";
import "./Skill.scss";

const definedValue = ["not yet given", "introduced", "prompted", "independent"];

const Skill = ({ currentValue, update, name }) => {
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(currentValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    update(name, change);
    setEdit(false);
  };

  const handleChange = (value) => {
    setChange(Number(value));
  };

  if (!edit) {
    return (
      <span
        onClick={() => setEdit(true)}
        className={`skill${edit ? ` skill__edit` : ``}`}
      >
        {definedValue[currentValue]}
      </span>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="skill__form">
      <label className="skill__label">
        {definedValue[0]}
        <input
          name={`${currentValue}`}
          type="radio"
          value={0}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <label className="skill__label">
        {definedValue[1]}
        <input
          name={`${currentValue}`}
          type="radio"
          value={1}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <label className="skill__label">
        {definedValue[2]}
        <input
          name={`${currentValue}`}
          type="radio"
          value={2}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <label className="skill__label">
        {definedValue[3]}
        <input
          name={`${currentValue}`}
          type="radio"
          value={3}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <button className="skill__button">Update</button>
    </form>
  );
};

export default Skill;
