import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext({
  user: {},
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
          console.log(e);
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
      console.log(e);
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