import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const listData = [
    { name: "Trending now", target: "/" },
    { name: "HTML", target: "/" },
    { name: "CSS", target: "/" },
    { name: "JavaScript", target: "/" },
    { name: "Python", target: "/" },
    { name: "Bootstrap", target: "/" },
    { name: "Java", target: "/" },
    { name: "C", target: "/" },
    { name: "C++", target: "/" },
    { name: "React JS", target: "/" },
    { name: "NodeJS", target: "/" },
    { name: "Web Development", target: "/" },
    { name: "Practice Problems", target: "/" },
    { name: "Test", target: "/" },
    { name: "Roadmaps", target: "/" },
  ];

  return (
    <div>
      <div className="bg-white flex items-center justify-evenly">
        <div>
          <img src={Logo} alt="cs-hub" className="w-40" />
        </div>
        <div className="w-2/6">
          <input
            type="search"
            placeholder="Search here"
            className="bg-[#F1F1F1] px-5 py-3 rounded-full w-full"
          />
        </div>
        <div className="w-1/4">
          <ul className="bg-[#F1F1F1] px-5 py-3 rounded-full flex justify-evenly w-full">
            <li className="cursor-pointer hover:font-bold hover:underline px-2">
              Home
            </li>
            <li className="cursor-pointer hover:font-bold hover:underline px-2">
              Olympiad
            </li>
            <li className="cursor-pointer hover:font-bold hover:underline px-2">
              CBSE
            </li>
            <li className="cursor-pointer hover:font-bold hover:underline px-2">
              CUET
            </li>
          </ul>
        </div>
        <div>
          <button
            className="rounded-full bg-[#FBC108] px-5 py-1"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
        </div>
      </div>
      <div className="bg-[#F1F1F1] w-full flex items-center">
        <div className="text-3xl text-[#FBC108] w-[5%] text-center cursor-pointer pb-2">
          {"<"}
        </div>
        <div className="w-[90%]">
          <ul className="flex justify-between items-center flex-wrap">
            {listData.map((item, i) => {
              return (
                <li key={i} className="text-black text-md font-semibold">
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="text-3xl text-[#FBC108] w-[5%] text-center cursor-pointer pb-2">
          {">"}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
