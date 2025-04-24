import { useNavigate } from "react-router-dom";

const Unauthorized401 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white px-4 text-center">
      <img
        src="https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1922.jpg?ga=GA1.1.2103749058.1738654707&semt=ais_hybrid&w=740"
        alt="401 Unauthorized"
        className="w-80 max-w-full mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
        401 - Unauthorized
      </h1>
      <p className="text-gray-600 mb-4 max-w-md">
        Sorry, you must be logged in to access this page. Please log in with the
        correct credentials to continue.
      </p>
      <button
        onClick={() => navigate("/auth/login")}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
      >
        Go to Login
      </button>
    </div>
  );
};

export default Unauthorized401;
