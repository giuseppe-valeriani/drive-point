"use client";
import { useAuth } from "../contexts/AuthContext";
import Login from "@components/Login/Login";
import PupilsList from "@components/PupilsList/PupilsList";
import "./style.scss";
import Logout from "@components/Logout/Logout";

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <main className="home">
      <h1 className="home__header">drive point</h1>
      <div>{isLoggedIn && <Logout />}</div>
      <div className="home__main">
        {isLoggedIn ? <PupilsList /> : <Login />}
      </div>
    </main>
  );
};

export default Home;
