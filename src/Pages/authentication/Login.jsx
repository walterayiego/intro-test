import React from "react";
import { Button, Input, useTheme } from "@mui/material";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Socials from "../../Components/Socials";
import authService from "../../services/auth.service";
import PasswordInput from "../../Components/PasswordInput";
import { toast } from "react-toastify";
import ErrorModal from "../../Components/ErrorModal";
import InputField from "../../Components/InputField";
import CheckBox from "../../Components/CheckBox";

function Login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [secure, setSecure] = React.useState("password");
  const [error, setError] = React.useState({ open: false, error: null });
  const [rememberMe, setRememberMe] = React.useState(false);
  const navigate = useNavigate();
  const { getUser } = useOutletContext();
  const { palette } = useTheme();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      userName: email,
      password: password,
      rememberMe: rememberMe,
      lockoutOnLoginFail: true,
    };
    const res = await authService.login(data);
    if (res.status === 200) {
      getUser();
      navigate("/home");
    } else {
      setError({ open: true, error: res?.data });
      toast.error("Login failed");
    }
  };

  return (
    <div className="bg-register min-h-screen w-screen col-center">
      {/*  */}

      <div className="row items-center justify-between h-[85vh] w-[80%] mt-[3vh]">
        <div className="col items-center w-[49%] justify-evenly h-full text-white">
          <p className="text-3xl w-full font-medium">Customer Login</p>
          <div className=" col text-xl self-start space-y-2 justify-between h-[10%]">
            <p>Welcome back to Intro.</p>
            <p>We're happy to have you back.</p>
          </div>
          <div className="info w-full">
            <p>Phone</p>
            <span>+254 123 456 789</span>
            <p>Address</p>
            <span>Somewhere, Somewhere, Nairobi Kenya</span>
            <p className="pb-0">Socials</p>
            <span className="row">
              <Socials />
            </span>
          </div>
        </div>

        <div className="w-[0.1em] bg-white/55 h-[90%]" />

        <div className="col-center items-center w-[49%] h-full text-white">
          <p className="text-2xl text-left w-full px-5 font-medium">
            Lets get Tendering...
          </p>
          <form
            onSubmit={handleLogin}
            className="col-center justify-evenly h-2/3 px-[3vw] w-full overflow-auto"
          >
            <div className="w-full col justify-around my-[2vh]">
              <div className="w-full col space-y-[1vh] my-1">
                <p>User Name</p>
                <InputField
                  required
                  size="small"
                  placeholder="Enter your UserName"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full col space-y-[1vh] my-1">
                <p>Password</p>
                <PasswordInput
                  onChange={(e) => setPassword(e.target.value)}
                  secure={secure}
                  setSecure={setSecure}
                />
              </div>
              <div className="row space-x- items-center">
                <CheckBox
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </div>
              <p className="p-1 text-center text-red-400">
                {typeof error?.error?.message === "string" &&
                  error.error.message}
              </p>
            </div>
            <div className="col items-center justify-around h-1/3 w-full text-white/60 text-sm">
              <Button
                type="submit"
                variant="contained"
                className="w-[60%] h-[6vh] my-2 col"
              >
                Login
              </Button>
              <Link to="/register">Forgot password</Link>
              <Link to="/register">Don't have an account? Register</Link>
            </div>
          </form>
        </div>
      </div>
      {/* <ErrorModal setError={setError} error={error} /> */}
    </div>
  );
}

export default Login;
