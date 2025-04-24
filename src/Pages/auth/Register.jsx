import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const [registeredEmail, setRegisteredEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validate = () => {
    const errors = {};

    if (!formFields.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formFields.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      errors.email = "Email is invalid";
    }

    if (!formFields.password.trim()) {
      errors.password = "Password is required";
    } else if (formFields.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("http://localhost:4000/auth/register", formFields);
      toast("Registration Successful", { type: "success" });
      setRegisteredEmail(formFields.email);
      setFormFields({ name: "", email: "", password: "" });
      setSuccess(true);
    } catch (err) {
      toast(err?.response?.data?.message || "Registration Failed!", {
        type: "error",
      });
    }
  };

  return (
    <div>
      <ToastContainer />

      {success ? (
        <div className="h-screen flex flex-col justify-center items-center px-4 text-center bg-white relative">
          <div className="text-5xl text-green-500 mb-4">📧</div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Registration Successful!
          </h2>
          <p className="text-gray-700 mb-2">
            A verification link has been sent to your email address:
          </p>
          <span className="font-semibold text-blue-600 break-words">
            {registeredEmail}
          </span>
          <p className="text-gray-600 mt-4 max-w-md">
            Please check your inbox and click on the link to verify your
            account. If you don’t see the email, check your spam or junk folder.
          </p>
        </div>
      ) : (
        <div className="w-full h-screen overflow-hidden flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full md:w-3/5">
            <h2 className="text-2xl font-semibold text-[#072F53] mb-4 text-center">
              Create your account
            </h2>

            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700">
                Name <span className="text-red-800">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formFields.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm absolute">
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className="mb-5">
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
              Register
            </button>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate("/auth/login")}
              >
                Login here
              </span>
            </p>
            <div className="sm:flex lg:flex items-center justify-center mt-4 gap-2 text-center">
              <p className="text-gray-700">
                Didn’t receive the email or link expired?
              </p>
              <button
                onClick={() => navigate("/auth/resend-email-verification")}
                className=" text-blue-600 hover:underline font-medium"
              >
                Resend verification link
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
