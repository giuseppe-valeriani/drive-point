import React from "react";
import "./style.scss";
import PupilsList from "@components/PupilsList/PupilsList";

const Home = () => {
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
