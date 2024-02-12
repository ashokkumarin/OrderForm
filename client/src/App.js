import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Login from "./components/login";
import SubmitOrder from "./components/submitorder";
import ConfirmOrder from "./components/confirmorder";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    // Add your theme colors here
  },
});

function Layout({ children, isUserSignedIn, onLogoutClick, onOrderClick }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Kitchen Order
          </Typography>
          {isUserSignedIn && (<Button color="inherit" onClick={ onOrderClick }> Order </Button>)}
          {isUserSignedIn && (<Button color="inherit" onClick= { onLogoutClick }> Logout </Button>)}
        </Toolbar>
      </AppBar>
      {children}
    </>
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

  const navigateToOrderPage = () => {
    navigate("/orders");
  }

  return (
    <Layout isUserSignedIn={ isUserSignedIn } onLogoutClick={onLogout} onOrderClick={navigateToOrderPage} >
      <Routes>
        <Route path="/" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
        <Route path="/orders" element={<SubmitOrder />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
      </Routes>
    </Layout>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
}

export default AppWrapper;
