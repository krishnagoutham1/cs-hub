import HomBg from "../assets/Home-bg.png";
import HomeHero from "../assets/Home-hero.png";

const Home = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#072F53]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HomBg})`, opacity: 0.2 }}
      ></div>

      <div className="relative flex gap-8 h-[80vh] justify-center items-center w-full">
        <div className="w-2/6">
          <div className="bg-[rgba(39,74,105,0.5)] w-130 h-130 px-8 rounded-full flex items-center justify-center">
            <img src={HomeHero} alt="hero" className="w-[75%]" />
          </div>
        </div>
        <div className="w-3/6 ml-5">
          <button className="bg-[#FBC108] text-[#072F53] font-bold px-5 py-2 rounded-md mb-5">
            EXPERT INSTRUCTION
          </button>
          <h1 className="text-white text-5xl font-bold">
            Build skill with expert
          </h1>
          <h1 className="text-white text-5xl font-bold mb-5">
            Any time anywhere
          </h1>
          <p className="text-white text-xl">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus orci
            imperdiet quis eros hendrerit nascetur egestas pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
