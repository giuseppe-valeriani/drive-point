import React, { useState } from "react";
import { useAuth } from "@contexts/AuthContext";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7777/login", {
        user: user,
        password: password,
      });
      setAuthUser({ name: user, token: response.data.accessToken });
      setIsLoggedIn(true);
      setUser("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <input
        className="login__input"
        type="text"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className="login__input"
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login__button">Log In</button>
    </form>
  );
};

export default Login;
