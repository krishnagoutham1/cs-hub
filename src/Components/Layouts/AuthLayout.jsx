import { Outlet } from "react-router-dom";
import AuthImg from "../../assets/AuthImg.jpg";

const AuthLayout = () => {
  return (
    <div>
      <div className="md:flex p-5 md:p-0 w-screen h-screen overflow-hidden">
        <div className="hidden md:block w-1/2">
          <img src={AuthImg} alt="auth" className="w-full h-full" />
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-28 left-0 w-full flex justify-center text-3xl text-[#072F53] font-bold">
            TechMindz
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
