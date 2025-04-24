import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdatePassword = () => {
  const { token } = useParams(); // Token from the URL
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState({
    newPassword: "",
    conformPassword: "",
  });

  const [errors, setErrors] = useState({
    newPassword: "",
    conformPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const err = {};
    if (!passwords.newPassword.trim()) {
      err.newPassword = "New password is required";
    } else if (passwords.newPassword.length < 6) {
      err.newPassword = "Password must be at least 6 characters";
    }

    if (!passwords.conformPassword.trim()) {
      err.conformPassword = "Please confirm your password";
    } else if (passwords.newPassword !== passwords.conformPassword) {
      err.conformPassword = "Passwords do not match";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        `http://localhost:4000/auth/update-password`,
        {
          token,
          password: passwords.newPassword,
          conformPassword: passwords.conformPassword,
        }
      );

      toast(res.data.message || "Password updated successfully!", {
        type: "success",
      });

      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (err) {
      toast(err?.response?.data?.message || "Failed to update password", {
        type: "error",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="w-full h-screen overflow-hidden flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-3/4 md:w-3/5">
          <h2 className="text-2xl font-semibold text-[#072F53] mb-4 text-center">
            Reset your password
          </h2>

          <div className="mb-6">
            <label htmlFor="newPassword" className="block text-gray-700">
              New Password <span className="text-red-800">*</span>
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={passwords.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm absolute">
                {errors.newPassword}
              </p>
            )}
          </div>

          <div className="mb-8">
            <label htmlFor="conformPassword" className="block text-gray-700">
              Confirm Password <span className="text-red-800">*</span>
            </label>
            <input
              type="password"
              id="conformPassword"
              name="conformPassword"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={passwords.conformPassword}
              onChange={handleChange}
            />
            {errors.conformPassword && (
              <p className="text-red-500 text-sm absolute">
                {errors.conformPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update Password
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
