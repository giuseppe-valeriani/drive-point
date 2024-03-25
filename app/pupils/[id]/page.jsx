"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@contexts/AuthContext";
import "./style.scss";
import Link from "next/link";
import PersonNotes from "@components/PersonNotes/PersonNotes";
import PersonSkills from "@components/PersonSkills/PersonSkills";
import PersonPayments from "@components/PersonPayments/PersonPayments";

const Pupil = ({ params }) => {
  const { authUser } = useAuth();
  const [pupil, setPupil] = useState(null);
  const [showNotes, setShowNotes] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showPayments, setShowPayments] = useState(false);

  const getPupil = async () => {
    const response = await axios.get(`http://localhost:7777/${params.id}`, {
      headers: {
        Authorization: `Bearer ${authUser.token}`,
      },
    });
    setPupil(response.data);
  };

  const updatePupil = async (payload) => {
    await axios.put(`http://localhost:7777/${params.id}`, payload, {
      headers: {
        Authorization: `Bearer ${authUser.token}`,
      },
    });
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
      <section className="pupil__header">
        <Link href="/">
          <img src={"/icons/home.png"} width={32} height={32} />
        </Link>
        <h1 className="pupil__title">{pupil.name}</h1>
        <Link href={`/pupils/${params.id}/settings`}>
          <img src={"/icons/settings.png"} width={32} height={32} />
        </Link>
      </section>
      <h2 className="pupil__subtitle">started on {pupil.starting_date}</h2>
      <PersonNotes
        pupil={pupil}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
      />
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
    </main>
  );
};

export default Pupil;
