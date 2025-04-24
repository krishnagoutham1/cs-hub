import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validate = () => {
    const errors = {};

    if (!formFields.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      errors.email = "Email is invalid";
    }

    if (!formFields.password.trim()) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        "http://localhost:4000/auth/login",
        formFields,
        { withCredentials: true }
      );

      toast("Login Successful", { type: "success" });

      if (res.data.otp) {
        navigate("/login-otp");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      toast(err?.response?.data?.message || "Login Failed!", {
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
            Sign in to your account
          </h2>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700">
              Email <span className="text-red-800">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formFields.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm absolute">
                {formErrors.email}
              </p>
            )}
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700">
              Password <span className="text-red-800">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formFields.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm absolute">
                {formErrors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          <p className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/auth/register")}
            >
              Register here
            </span>
          </p>

          <p className="mt-2 text-center">
            Trouble signing in?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/auth/reset-password")}
            >
              Reset password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
