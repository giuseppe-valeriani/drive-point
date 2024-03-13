"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./style.scss";

const page = ({ params }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await axios.delete(`http://localhost:7777/${params.id}`);
    router.push("/");
  };

  return (
    <main className="settings">
      <section className="settings__header">
        <div></div>
        <h1 className="settings__title">Settings</h1>
        <Link href={`/pupils/${params.id}`}>
          <img src={"/icons/confirm.png"} width={32} height={32} />
        </Link>
      </section>
      <section className="settings__content">
        <h2 className="settings__subtitle">deleting profile</h2>
        <button
          onClick={handleDelete}
          className="settings__button settings__button--delete"
        >
          Delete
        </button>
      </section>
    </main>
  );
};

export default page;
