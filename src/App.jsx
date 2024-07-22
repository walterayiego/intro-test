import { Outlet, useNavigate } from "react-router-dom";
import theme from "./styles/theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./styles/app.css";
import "./styles/auth.css";
import authService from "./services/auth.service.js";

function App() {
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();
  const getUser = async () => {
    const response = await authService.getCurrentUser();
    const userData = await response?.data;
    console.log(userData);

    if (userData) {
      setUser(userData);
      return userData;
    } else {
      navigate("/login", { replace: true });
      return {};
    }
  };

  const context = { user, setUser, getUser };
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <div className="bg-background">
        <Outlet context={context} />
      </div>
    </ThemeProvider>
  );
}

export default App;
