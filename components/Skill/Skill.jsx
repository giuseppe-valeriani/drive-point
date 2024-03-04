import React, { useState } from "react";
import "./Skill.scss";

const definedValue = ["not yet given", "introduced", "capable", "independent"];

const Skill = ({ skill, update, name }) => {
  const [edit, setEdit] = useState(false);
  const [change, setChange] = useState(skill);

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
        {definedValue[skill]}
      </span>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="skill__form">
      <label>
        not yet given
        <input
          name={`${skill}`}
          type="radio"
          value={0}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <label>
        introduced
        <input
          name={`${skill}`}
          type="radio"
          value={1}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <label>
        capable
        <input
          name={`${skill}`}
          type="radio"
          value={2}
          onClick={(e) => handleChange(e.target.value)}
        />
      </label>
      <label>
        independent
        <input
          name={`${skill}`}
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
