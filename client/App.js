import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <ProtectedRoute />
    </AuthProvider>
  );
};

export default App;
