// // context api is use for manage the page globally

import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // children means all components that defined u like left , right all are children
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("messenger");

  // parse the user data and storage in state      // parse is liye kr rhe hein kyunki jo data aa rha hei backend se voh JSON Format mein hei
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );

  return (
    // customize hook by own setAuthUser and AuthUser
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // yeh hook hei
