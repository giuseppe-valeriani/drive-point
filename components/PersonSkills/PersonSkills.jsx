import React from "react";
import Skill from "@components/Skill/Skill";
import "./PersonSkills.scss";

const PersonSkills = ({ pupil, update, showSkills, setShowSkills }) => {
  return (
    <section className="person-skills">
      <button
        className="person-skills__button"
        onClick={() => setShowSkills(!showSkills)}
      >
        show skills
      </button>
      {showSkills &&
        pupil.skills.map((skill) => (
          <article key={skill._id} className="person-skills__article">
            <span className="person-skills__label">{`${skill.label}`}</span>
            <Skill update={update} skill={skill} />
          </article>
        ))}
    </section>
  );
};

export default PersonSkills;
