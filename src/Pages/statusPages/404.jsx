import { useNavigate } from "react-router-dom";
// import NotFoundImg from "../../assets/404.jpg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center bg-gray-100 px-4">
      <img
        // src={NotFoundImg}
        src="https://img.freepik.com/premium-vector/computer-monitor-with-red-sign-that-sayss-it_327903-2258887.jpg?ga=GA1.1.2103749058.1738654707&semt=ais_hybrid&w=740"
        alt="404 - Page Not Found"
        className="w-full max-w-lg mb-8"
      />

      <h1 className="text-4xl font-bold text-[#072F53] mb-4">
        Oops! Page not found
      </h1>

      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back to safety.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Go to Homepage
      </button>

      <p className="mt-6 text-sm text-gray-400">— TechMindz</p>
    </div>
  );
};

export default NotFound;
