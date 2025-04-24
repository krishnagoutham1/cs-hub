import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        "http://localhost:4000/auth/reset-password-link",
        { email }
      );

      toast(res?.data?.message || "Reset link sent", { type: "success" });
      setEmail("");
    } catch (err) {
      toast(err?.response?.data?.message || "Something went wrong", {
        type: "error",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* <div className="h-screen flex flex-col justify-center items-center px-4 text-center bg-white relative">
        <div className="text-5xl text-green-500 mb-4">📨</div>
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Reset Link Sent!
        </h2>

        <p className="text-gray-700 mb-2">
          A password reset link has been sent to your email:
        </p>

        <span className="font-semibold text-blue-600 break-words">{email}</span>

        <p className="text-gray-600 mt-4 max-w-md">
          Please check your inbox and click on the reset link to update your
          password. If you don’t see the email, check your spam or junk folder.
          <br />
          <br />
          ⚠️ This link is active only for <strong>15 minutes</strong>. Do not
          share this link with anyone for security reasons.
        </p>
      </div> */}
      <div className="w-full h-screen overflow-hidden flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-3/4 md:w-3/5">
          <h2 className="text-2xl font-semibold text-[#072F53] mb-4 text-center">
            Forgot your password?
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your registered email and we’ll send you a link to reset your
            password.
          </p>

          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700">
              Email <span className="text-red-800">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
            {error && <p className="text-red-500 text-sm absolute">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>

          <p className="mt-4 text-center">
            Remember your password?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/auth/login")}
            >
              Go to Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
