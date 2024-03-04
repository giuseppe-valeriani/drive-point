"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import "./style.scss";
import Skill from "@components/Skill/Skill";

const Pupil = ({ params }) => {
  const [pupil, setPupil] = useState(null);

  const getPupil = async () => {
    const response = await axios.get(`http://localhost:7777/${params.id}`);
    setPupil(response.data);
  };

  const updatePupil = async (payload) => {
    const response = await axios.patch(
      `http://localhost:7777/${params.id}`,
      payload
    );
    getPupil();
  };

  const update = (name, value) => {
    let newSkill = new Object();
    newSkill[name] = value;
    updatePupil(newSkill);
  };

  useEffect(() => {
    getPupil();
  }, []);

  if (!pupil) {
    return <section>Loading...</section>;
  }

  return (
    <main>
      <section className="pupil">
        <Link className="pupil__icon-box" href="/">
          <img className="pupil__icon" src={"/icons/home.png"} />
        </Link>
        <h1 className="pupil__title">{pupil.name}</h1>
      </section>
      <section>
        <h2 className="pupil__subtitle">started on {pupil.starting_date}</h2>
        <article>
          <div className="pupil__skill">
            <span className="pupil__label">Introduction 1</span>
            <Skill update={update} skill={pupil.intro_1} name={`intro_1`} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Introduction 2</span>
            <Skill update={update} skill={pupil.intro_2} name={`intro_2`} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Introduction 3</span>
            <Skill update={update} skill={pupil.intro_3} name={`intro_3`} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Left 1</span>
            <Skill
              update={update}
              skill={pupil.turn_left_1}
              name={`turn_left_1`}
            />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Left 2</span>
            <Skill
              update={update}
              skill={pupil.turn_left_2}
              name={`turn_left_2`}
            />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Right 1</span>
            <Skill
              update={update}
              skill={pupil.turn_right_1}
              name={`turn_right_1`}
            />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Right 2</span>
            <Skill
              update={update}
              skill={pupil.turn_right_2}
              name={`turn_right_2`}
            />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Hill Starts 1</span>
            <Skill
              update={update}
              skill={pupil.hill_starts_1}
              name={`hill_starts_1`}
            />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Hill Starts 2</span>
            <Skill
              update={update}
              skill={pupil.hill_starts_2}
              name={`hill_starts_2`}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Pupil;
