"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";

const Pupil = ({ params }) => {
  const [pupil, setPupil] = useState(null);

  const getPupil = async () => {
    const response = await axios.get(`http://localhost:7777/${params.id}`);
    console.log(response.data);
    setPupil(response.data);
  };

  const definedValue = [
    "not yet given",
    "introduced",
    "capable",
    "independent",
  ];

  useEffect(() => {
    getPupil();
  }, []);

  if (!pupil) {
    return <section>Loading...</section>;
  }

  return (
    <section className="pupil">
      <h1 className="pupil__title">{pupil.name}</h1>
      <h2 className="pupil__subtitle">started on {pupil.starting_date}</h2>
      <article>
        <div className="pupil__skill">
          <span className="pupil__label">Introduction 1</span>
          <span className="pupil__value">{definedValue[pupil[0].intro_1]}</span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Introduction 2</span>
          <span className="pupil__value">{definedValue[pupil.intro_2]}</span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Introduction 3</span>
          <span className="pupil__value">{definedValue[pupil.intro_3]}</span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Turning Left 1</span>
          <span className="pupil__value">
            {definedValue[pupil.turn_left_1]}
          </span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Turning Left 2</span>
          <span className="pupil__value">
            {definedValue[pupil.turn_left_2]}
          </span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Turning Right 1</span>
          <span className="pupil__value">
            {definedValue[pupil.turn_right_1]}
          </span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Turning Right 2</span>
          <span className="pupil__value">
            {definedValue[pupil.turn_right_2]}
          </span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Hill Starts 1</span>
          <span className="pupil__value">
            {definedValue[pupil.hill_starts_1]}
          </span>
        </div>
        <div className="pupil__skill">
          <span className="pupil__label">Hill Starts 2</span>
          <span className="pupil__value">
            {definedValue[pupil.hill_starts_2]}
          </span>
        </div>
      </article>
    </section>
  );
};

export default Pupil;
