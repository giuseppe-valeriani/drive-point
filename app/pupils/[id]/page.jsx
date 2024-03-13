"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.scss";
import PersonHeader from "@components/PersonHeader/PersonHeader";
import PersonSkills from "@components/PersonSkills/PersonSkills";
import PersonPayments from "@components/PersonPayments/PersonPayments";

const Pupil = ({ params }) => {
  const [pupil, setPupil] = useState(null);
  const [showSkills, setShowSkills] = useState(false);
  const [showPayments, setShowPayments] = useState(false);

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
    <main className="pupil">
      <PersonHeader name={pupil.name} />
      <h2 className="pupil__subtitle">started on {pupil.starting_date}</h2>
      <PersonSkills
        pupil={pupil}
        update={update}
        showSkills={showSkills}
        setShowSkills={setShowSkills}
      />
      <PersonPayments
        pupil={pupil}
        showPayments={showPayments}
        setShowPayments={setShowPayments}
      />
      {/* <section className="pupil__block">
        <button
          className="pupil__button"
          onClick={() => setShowPayments(!showPayments)}
        >
          Show Payments
        </button>
        {showPayments &&
          pupil.payments.map((note) => (
            <Note className="pupil__note" key={note._id} note={note} />
          ))}
        <div></div>
      </section> */}
    </main>
  );
};

export default Pupil;
