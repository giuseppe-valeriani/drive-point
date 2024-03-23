"use client";

import React from "react";
import { useAuth } from "@contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./style.scss";
import Form from "@components/Form/Form";

const AddPupilPage = () => {
  const { authUser } = useAuth();
  const router = useRouter();

  const addPupil = async (pupil) => {
    await axios.post("http://localhost:7777/", pupil, {
      headers: {
        Authorization: `Bearer ${authUser.token}`,
      },
    });
  };

  const formData = (data) => {
    addPupil(data);
    router.push("/");
  };

  return (
    <main className="add-pupil-page">
      <section className="add-pupil-page__header">
        <Link className="add-pupil-page__icon-box" href="/">
          <img width={32} height={32} src={"/icons/home.png"} />
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
