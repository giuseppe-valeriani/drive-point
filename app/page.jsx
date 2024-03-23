"use client";
import { useAuth } from "../contexts/AuthContext";
import Login from "@components/Login/Login";
import PupilsList from "@components/PupilsList/PupilsList";
import "./style.scss";
import Logout from "@components/Logout/Logout";

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
      <div className="home__nav">
        <h1 className="home__header">drive point</h1>
        <span className="home__logout">
          <Logout />
        </span>
      </div>
      <div className="home__main">
        <PupilsList />
      </div>
    </main>
  );
};

export default Home;
