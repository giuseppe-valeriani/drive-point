"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   const subscribe = AuthService.subscribe((user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //       setAuthUser(user);
  //     } else {
  //       setIsLoggedIn(false);
  //       setAuthUser(null);
  //     }
  //   });

  //   return subscribe;
  // }, []);

  const value = {
    authUser,
    isLoggedIn,
    setAuthUser,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
