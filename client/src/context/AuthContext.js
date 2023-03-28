import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../config/firebaseConfig';
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const clean = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      clean();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
