import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResendVerificationLink = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const validate = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://localhost:4000/auth/resend-email-verification", {
        email,
      });
      setRegisteredEmail(email);
      toast.success("Verification link has been resent to your email.");
      setEmail("");
      setSuccess(true);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to resend verification link."
      );
    }
  };

  return (
    <div>
      <ToastContainer />
      {success ? (
        <div className="h-screen flex flex-col justify-center items-center px-4 text-center bg-white relative">
          <div className="text-5xl text-green-500 mb-4">📧</div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Verification Link Sent!
          </h2>
          <p className="text-gray-700 mb-2">
            We&apos;ve resent the verification link to:
          </p>
          <span className="font-semibold text-blue-600 break-words">
            {registeredEmail}
          </span>
          <p className="text-gray-600 mt-4 max-w-md">
            Please check your inbox and follow the link to verify your account.
            If you don’t see the email, be sure to check your spam or junk
            folder.
          </p>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center bg-white px-4">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-[#072F53] mb-4 text-center">
              Resend Verification Link
            </h2>

            <div className="mb-6 relative">
              <label htmlFor="email" className="block text-gray-700">
                Email <span className="text-red-800">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={handleChange}
              />
              {emailError && (
                <p className="text-red-500 text-sm absolute">{emailError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Resend Link
            </button>

            <p className="mt-4 text-center">
              Don’t have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate("/auth/register")}
              >
                Register here
              </span>
            </p>

            <p className="mt-2 text-center">
              Already verified?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate("/auth/login")}
              >
                Login here
              </span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResendVerificationLink;
