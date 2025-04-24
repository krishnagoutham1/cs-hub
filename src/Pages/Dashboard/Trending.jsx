import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Trending = () => {
  const cardData = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-300" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-500" /> },
  ];
  return (
    <div>
      <div className="bg-[#F1F1F1] px-[5%] py-5 flex items-center justify-between flex-wrap">
        <div className="text-4xl font-bold">
          Trending
          <br />
          Technology
        </div>
        {cardData.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-white px-4 rounded-lg shadow-2xl flex justify-center items-center gap-3"
            >
              <div className="p-3 text-6xl">{item.icon}</div>
              <div className="mx-3 font-semibold text-xl">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
