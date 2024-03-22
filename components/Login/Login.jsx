import React from "react";
import axios from "axios";
import "./Login.scss";

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const userObject = {
      user: e.target.user.value,
      password: e.target.password.value,
    };

    getLoggedUser(userObject);
  };

  const getLoggedUser = async (user) => {
    const response = await axios.post("http://localhost:7777/login", user);
    console.log(response);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="user" />
      <input type="text" name="password" />
      <button>Log In</button>
    </form>
  );
};

export default Login;
