import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [showResendLink, setShowResendLink] = useState(false);
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleActivate = async () => {
    if (!token) return setError("Invalid url");
    setIsLoading(true);
    try {
      await axios.post(`http://localhost:4000/auth/verify-email/${token}`);

      toast.success("Your email has been successfully verified!");
      setError("");

      setTimeout(() => {
        navigate("/auth/login");
      }, 5000);
    } catch (err) {
      const errorMsg =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg);

      if (
        err?.response?.data?.expired ||
        errorMsg.toLowerCase().includes("invalid token")
      ) {
        setShowResendLink(true);
      }
      if (err?.response?.data?.showLogin) {
        setShowLogin(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <section
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        aria-label="Verify Email Page"
      >
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Verify Your Email Address
        </h1>
        <p className="text-lg text-gray-800 text-center mb-4">
          Welcome to <span className="font-bold text-[#072F53]">TechMindz</span>
          !
        </p>
        <p className="text-center text-gray-600 mb-6">
          Please confirm your email address to activate your account. If you are
          ready, click the button below to proceed.
        </p>

        <button
          onClick={handleActivate}
          disabled={isLoading}
          className={`w-full py-2 rounded-md transition duration-200 mb-4 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Verifying..." : "Confirm Email"}
        </button>

        {error && (
          <div aria-live="polite" className="text-center mb-4">
            <p className="text-sm text-red-600 mb-2">{error}</p>
            {showLogin && (
              <button
                onClick={() => navigate("/auth/login")}
                className="text-blue-600 hover:underline text-sm"
              >
                Click here to login
              </button>
            )}
          </div>
        )}

        <p className="text-sm text-gray-600 text-center border-t pt-4">
          If you received this email by mistake or did not sign up for an
          account, please ignore this message. Do not click the button to ensure
          the security of your account.
        </p>

        {showResendLink && (
          <div
            aria-live="polite"
            className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-2 text-center"
          >
            <p className="text-gray-700">Link expired?</p>
            <button
              onClick={() => navigate("/auth/resend-email-verification")}
              className="text-blue-600 hover:underline font-medium"
            >
              Resend verification link
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default VerifyEmail;
