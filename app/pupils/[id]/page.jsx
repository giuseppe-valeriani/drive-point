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
    await axios.put(`http://localhost:7777/${params.id}`, payload);
    getPupil();
  };

  const update = (name, value) => {
    updatePupil({ skill: name, value: value });
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
        {pupil.skills.map((skill) => (
          <article key={skill._id} className="pupil__skill">
            <span className="pupil__label">{`${skill.skill}`}</span>
            <Skill
              update={update}
              currentValue={skill.value}
              name={`${skill.skill}`}
            />
          </article>
        ))}
      </section>
    </main>
  );
};

export default Pupil;
