import { useNavigate } from "react-router-dom";

const Forbidden403 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <img
        src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1935.jpg?ga=GA1.1.2103749058.1738654707&semt=ais_hybrid&w=740"
        alt="403 Forbidden"
        className="max-w-md w-full mb-6"
      />
      <h1 className="text-4xl font-bold text-red-600 mb-4">403 - Forbidden</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Sorry, you don’t have permission to access this page. If you believe
        this is a mistake, please contact the administrator or try logging in
        with proper access.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Forbidden403;
