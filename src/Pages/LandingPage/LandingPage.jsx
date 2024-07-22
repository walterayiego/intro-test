import { useEffect, useState } from "react";
import {
  Navigate,
  useOutletContext,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Loading from "../../Components/Loading";
import authService from "../../services/auth.service";

const LandingPage = () => {
  const [redirectToVerifyPage, setRedirectToVerifyPage] = useState(true);
  const { user, setUser } = useOutletContext();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const searchParams = new URLSearchParams(location.search);
      const userId = searchParams.get("userId");
      const code = searchParams.get("code");

      if (userId && code) {
        navigate(`/email-verification/${userId}/${code}`, { replace: true });
        setRedirectToVerifyPage(true);
      } else {
        setRedirectToVerifyPage(false);
      }
    })();
  }, []);

  const AuthPages = () => {
    const auth = authService.checkAuth();
    return auth ? (
      <Navigate to="/home" replace={true} />
    ) : (
      <Navigate to="/login" replace={true} />
    );
  };
  return (
    <div>{redirectToVerifyPage === true ? <Loading /> : <AuthPages />}</div>
  );
};

export default LandingPage;
