import React from "react";
import "./app.scss";
import PupilsList from "@components/PupilsList/PupilsList";

const Home = () => {
  return (
    <main>
      <h1 className="app__header">drive point</h1>
      <PupilsList />
    </main>
  );
};

export default Home;
