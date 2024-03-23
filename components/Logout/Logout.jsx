import React from "react";
import { useAuth } from "@contexts/AuthContext";
import { useRouter } from "next/navigation";
import "./Logout.scss";

const Logout = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const userLogout = () => {
    setAuthUser(null);
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <button className="button" onClick={userLogout}>
      Log Out
    </button>
  );
};

export default Logout;
