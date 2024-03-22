"use client";
import React, { useState } from "react";
import "./style.scss";
import Login from "@components/Login/Login";
import PupilsList from "@components/PupilsList/PupilsList";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <main className="home">
        <h1 className="home__header">drive point</h1>
        <div className="home__main">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </div>
      </main>
    );
  }

  return (
    <main className="home">
      <h1 className="home__header">drive point</h1>
      <div className="home__main">
        <PupilsList />
      </div>
    </main>
  );
};

export default Home;
