import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login";
import SubmitOrder from "./components/orderform";
import OrderConfirmation from "./components/orderconfirmation";

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
    navigate("/orderform");
  };

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
    navigate("/");
  };

  console.log("Test print");

  return (
    <Routes>
      <Route path="/" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
      <Route path="/orderform" element={<SubmitOrder onLogout={onLogout} />} />
      <Route path="/orderconfirmation" element={<OrderConfirmation />} />
    </Routes>
  );
}

export default AppWrapper;