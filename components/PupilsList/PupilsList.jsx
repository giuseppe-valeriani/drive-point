"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@contexts/AuthContext";
import Link from "next/link";
import axios from "axios";
import AddPupil from "@components/AddPupil/AddPupil";
import "./PupilsList.scss";

const PupilsList = () => {
  const { authUser } = useAuth();
  const [fetchedList, setFetchedList] = useState(null);

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("http://localhost:7777/", {
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      });
      setFetchedList(response.data);
    };
    getList();
  }, []);

  if (!fetchedList) {
    return <section className="loading">Loading...</section>;
  }

  return (
    <section className="pupils-list">
      <div className="pupils-list__divider">
        <h2 className="pupils-list__title">Pupils List</h2>
        <Link className="home__link" href="/pupils/add">
          <AddPupil />
        </Link>
      </div>
      <ul className="pupils-list__list">
        {fetchedList.map((pupil) => (
          <li className="pupils-list__element" key={pupil._id}>
            <Link className="pupils-list__pupil" href={`/pupils/${pupil._id}`}>
              {pupil.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PupilsList;
