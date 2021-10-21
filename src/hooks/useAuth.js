import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useError } from "./useError";

export const AuthContext = React.createContext({
  user: {},
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { dispatchError } = useError();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      (async () => {
        try {
          const me = await axios.get("/me", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(me.data);
        } catch (e) {
          dispatchError();
        }
      })();
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post("/login", {
        login,
        password,
      });

      setUser(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      dispatchError("Please provide a valid username and password");
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw Error("useAuth needs to be used within AuthContext");
  }

  return auth;
};
