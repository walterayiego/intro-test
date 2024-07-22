import React, { useEffect } from "react";
import { Button, useTheme } from "@mui/material";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import Socials from "../../Components/Socials";
import authService from "../../services/auth.service";
import { toast } from "react-toastify";
import { maskEmail } from "../../Components/sharedData";

function Emailverification() {
  const { palette } = useTheme();
  const { unVerifiedUser } = useOutletContext();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params?.userId && params?.code) {
      emailVerification();
    }
  }, []);

  const emailVerification = async () => {
    const tokens = {
      userId: params?.userId,
      confirmToken: params?.code,
    };
    const res = await authService.verifyEmail(tokens);
    if (res?.status === 200) {
      toast.success("Email verified", {
        autoClose: 1000,
      });
      navigate("/login");
    }
  };

  const handleResendEmailToken = async () => {
    const email = maskEmail(unVerifiedUser?.email);
    const res = await authService.generateEmailToken(unVerifiedUser);
    if (res?.status === 200) {
      toast.success(`Email sent to ${email}`);
      return;
    }
    toast.error(`Error sending email to ${email}`);
  };

  return (
    <div className="bg-primary h-screen w-full py-[10vh] px-[10vw] col items-center justify-between text-white ">
      <h2 className=" text-5xl font-bold">Thank You for Joining Intro</h2>
      <p className="text-2xl">Let's get Tendering...</p>
      <div className="col h-[20%] justify-evenly items-center">
        <p className="">A verification link has been sent to your email.</p>
        <p>Click the link to verify your account.</p>
      </div>
      <Button
        sx={{ backgroundColor: palette.primary.light }}
        className="w-[40vw] h-[10vh] self-center"
        variant="contained"
        onClick={handleResendEmailToken}
      >
        Resend Email
      </Button>
      <div className="info-verfication w-full h-[20%]">
        <div>
          <p>Phone</p>
          <span>+254 123 456 789</span>
        </div>
        <div>
          <p>Address</p>
          <span>Somewhere, Somewhere, Nairobi Kenya</span>
        </div>
        <div>
          <p className="pb-0">Socials</p>
          <span className="row">
            <Socials />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Emailverification;
