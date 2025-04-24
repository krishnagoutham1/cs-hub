import { Route, Routes } from "react-router-dom";
import AuthLayout from "../Components/AuthLayout";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import VerifyEmail from "../Pages/auth/VerifyEmail";
import LoginOtp from "../Pages/auth/LoginOtp";
import ResendVerificationLink from "../Pages/auth/ResendVerificationLink";
import ResetPassword from "../Pages/auth/ResetPassword";
import UpdatePassword from "../Pages/auth/UpdatePassword";
import Forbidden403 from "../Pages/statusPages/403";
import NotFound from "../Pages/statusPages/404";
import Unauthorized401 from "../Pages/statusPages/401";
import LinkExpired from "../Pages/statusPages/LinkExpired";
import CommingSoon from "../Pages/statusPages/CommingSoon";
import Dashboard from "../Pages/Dashboard/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/401" element={<Unauthorized401 />} />
      <Route path="/403" element={<Forbidden403 />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/link-expired" element={<LinkExpired />} />
      <Route path="/commingSoon" element={<CommingSoon />} />

      <Route path="/" element={<Dashboard />} />

      <Route path="/verify-email/:token" element={<VerifyEmail />} />
      <Route path="/login-otp" element={<LoginOtp />} />

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="update-password/:token" element={<UpdatePassword />} />

        <Route
          path="resend-email-verification"
          element={<ResendVerificationLink />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
