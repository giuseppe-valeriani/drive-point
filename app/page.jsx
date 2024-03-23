"use client";
import { useAuth } from "../contexts/AuthContext";
import Login from "@components/Login/Login";
import PupilsList from "@components/PupilsList/PupilsList";
import "./style.scss";

const Home = () => {
  const { authUser, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <main className="home">
        <h1 className="home__header">drive point</h1>
        <div className="home__main">
          <Login />
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
