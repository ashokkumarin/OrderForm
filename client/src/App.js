import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login";
import SubmitOrder from "./components/submitorder";
import ConfirmOrder from "./components/confirmorder";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  let navigate = useNavigate();

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
    navigate("/orders");
  };

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
      <Route path="/orders" element={<SubmitOrder onLogout={onLogout} />} />
      <Route path="/confirmorder" element={<ConfirmOrder />} />
    </Routes>
  );
}

export default AppWrapper;