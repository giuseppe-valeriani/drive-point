import React from "react";
import Link from "next/link";
import "./style.scss";
import PupilsList from "@components/PupilsList/PupilsList";
import AddPupil from "@components/AddPupil/AddPupil";

const Home = () => {
  return (
    <main className="home">
      <h1 className="home__header">drive point</h1>
      <div className="home__main">
        <PupilsList />
        <Link className="home__link" href="/pupils/add">
          <AddPupil />
        </Link>
      </div>
    </main>
  );
};

export default Home;
