"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "./PupilsList.scss";

const PupilsList = () => {
  const [fetchedList, setFetchedList] = useState(null);

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("http://localhost:7777/");
      setFetchedList(response.data);
    };
    getList();
  }, []);

  if (!fetchedList) {
    return <section className="loading">Loading...</section>;
  }

  return (
    <section className="pupils-list">
      <h2 className="pupils-list__title">Pupils List</h2>
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
