"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./style.scss";
import Form from "@components/Form/Form";

const emptyForm = {
  name: "",
  starting_date: "",
};

const AddPupilPage = () => {
  const [newPupil, setNewPupil] = useState(emptyForm);
  const router = useRouter();

  const addPupil = async (pupil) => {
    await axios.post("http://localhost:7777/", pupil);
  };

  const formData = (data) => {
    addPupil(data);
    router.push("/");
  };

  return (
    <main className="add-pupil-page">
      <section className="add-pupil-page__header">
        <Link className="add-pupil-page__icon-box" href="/">
          <img className="add-pupil-page__icon" src={"/icons/home.png"} />
        </Link>
        <h1 className="add-pupil-page__title">add new pupil</h1>
      </section>
      <section>
        <Form formData={formData} />
      </section>
    </main>
  );
};

export default AddPupilPage;
