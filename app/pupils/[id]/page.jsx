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

  useEffect(() => {
    getPupil();
  }, []);

  if (!pupil) {
    return <section>Loading...</section>;
  }

  return (
    <>
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
            <Skill skill={pupil.intro_1} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Introduction 2</span>
            <Skill skill={pupil.intro_2} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Introduction 3</span>
            <Skill skill={pupil.intro_3} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Left 1</span>
            <Skill skill={pupil.turn_left_1} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Left 2</span>
            <Skill skill={pupil.turn_left_2} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Right 1</span>
            <Skill skill={pupil.turn_right_1} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Turning Right 2</span>
            <Skill skill={pupil.turn_right_2} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Hill Starts 1</span>
            <Skill skill={pupil.hill_starts_1} />
          </div>
          <div className="pupil__skill">
            <span className="pupil__label">Hill Starts 2</span>
            <Skill skill={pupil.hill_starts_2} />
          </div>
        </article>
      </section>
    </>
  );
};

export default Pupil;
