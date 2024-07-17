import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create Context
const AuthContext = createContext();

// Auth Provider component
const AuthProvider = ({ children }) => {
  // Global state
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  // Load initial local storage data
  useEffect(() => {
    const loadLocalStorageData = async () => {
      try {
        const data = await AsyncStorage.getItem("@auth");
        if (data) {
          const { user, token } = JSON.parse(data);
          setState((prevState) => ({ ...prevState, user, token }));
        }
      } catch (error) {
        console.error("Error loading auth data:", error);
      }
    };
    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
