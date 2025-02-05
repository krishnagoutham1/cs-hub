import FeatureHero from "../assets/features.avif";
import { IoBookSharp } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";

const Features = () => {
  return (
    <div className="px-[5%]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#072F53] mt-8 mb-5">
          Features
        </h1>
        <p className="mb-5 text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-1/2 flex flex-col gap-5 overflow-hidden h-[600px] overflow-y-auto no-scrollbar">
          {/* start */}

          {/* Study Material */}
          <div className="p-5 bg-[#F9F9F9] shadow-mg rounded-2xl mb-3">
            <div className="flex items-center gap-5 mb-3">
              <div className="bg-[#072F53] rounded-full p-3">
                <IoBookSharp className="text-2xl text-[#FBC108]" />
              </div>
              <h1 className="text-2xl text-[#072F53] font-bold">
                Study Material
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa.
              </p>
            </div>
          </div>

          {/* Question bank */}
          <div className="p-5 bg-[#F9F9F9] shadow-mg rounded-2xl mb-3">
            <div className="flex items-center gap-5 mb-3">
              <div className="bg-[#072F53] rounded-full p-3">
                <FaBook className="text-2xl text-[#FBC108]" />
              </div>
              <h1 className="text-2xl text-[#072F53] font-bold">
                Question bank
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa.
              </p>
            </div>
          </div>

          {/* Test Series */}
          <div className="p-5 bg-[#F9F9F9] shadow-mg rounded-2xl mb-3">
            <div className="flex items-center gap-5 mb-3">
              <div className="bg-[#072F53] rounded-full p-3">
                <GrTest className="text-2xl text-[#FBC108]" />
              </div>
              <h1 className="text-2xl text-[#072F53] font-bold">Test Series</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa.
              </p>
            </div>
          </div>

          {/* Previous solved papers */}
          <div className="p-5 bg-[#F9F9F9] shadow-mg rounded-2xl mb-3">
            <div className="flex items-center gap-5 mb-3">
              <div className="bg-[#072F53] rounded-full p-3">
                <RiFilePaper2Line className="text-2xl text-[#FBC108]" />
              </div>
              <h1 className="text-2xl text-[#072F53] font-bold">
                Previous solved papers
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa.
              </p>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="p-5 bg-[#F9F9F9] shadow-mg rounded-2xl mb-3">
            <div className="flex items-center gap-5 mb-3">
              <div className="bg-[#072F53] rounded-full p-3">
                <MdOutlineLeaderboard className="text-2xl text-[#FBC108]" />
              </div>
              <h1 className="text-2xl text-[#072F53] font-bold">Leaderboard</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa.
              </p>
            </div>
          </div>

          {/* end */}
        </div>
        <div className="w-1/2">
          <img src={FeatureHero} />
        </div>
      </div>
    </div>
  );
};

export default Features;
