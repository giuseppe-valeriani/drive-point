"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Pupil = ({ params }) => {
  const [pupil, setPupil] = useState(null);
  useEffect(() => {
    const getPupil = async () => {
      const response = await axios.get(`http://localhost:7777/${params.id}`);
      setPupil(response.data);
      console.log(response.data);
    };

    getPupil();
  }, []);

  if (!pupil) {
    return <article>Loading...</article>;
  }

  return <article>{pupil.name}</article>;
};

export default Pupil;
