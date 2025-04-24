import { useNavigate } from "react-router-dom";

const LinkExpired = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white px-6 text-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3H-jvaMl2d-K2LSByGr0mBffES1Z4yx69s6ffetFcsDDpSzaPwcoFzxH1kWlKozih01w&usqp=CAU"
        alt="Link Expired"
        className="w-72 max-w-full mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
        Link Expired
      </h1>
      <p className="text-gray-700 max-w-md mb-4">
        This link has expired or is no longer valid. Please request a new one.
      </p>
      <button
        onClick={() => navigate("/resend-verification")}
        className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Resend Link
      </button>
    </div>
  );
};

export default LinkExpired;
