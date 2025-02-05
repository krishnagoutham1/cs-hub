import Logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F1F1F1] px-[5%] py-8">
      <div className="flex justify-between">
        <div className="w-1/2">
          <div>
            <img src={Logo} alt="cs-hub" className="w-36" />
          </div>
          <div className="font-bold text-xl text-[#072F53] my-3">
            About cs hub
          </div>
          <p className="w-3/4">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus orci
            imperdiet quis eros hendrerit nascetur egestas pulvinar. Lorem ipsum
            odor amet, consectetuer adipiscing elit. Faucibus orci imperdiet
            quis eros hendrerit nascetur egestas pulvinar.
          </p>
        </div>
        <div className="w-1/2 flex justify-around">
          <div className="flex flex-col justify-evenly">
            <div className="font-semibold text-xl text-[#072F53] my-3">
              Company
            </div>
            <div>About</div>
            <div>Features</div>
            <div>Works</div>
            <div>Careers</div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="font-semibold text-xl text-[#072F53] my-3">
              Help
            </div>
            <div>Customer support</div>
            <div>Delivary Details</div>
            <div>Terma & conditions</div>
            <div>Privacy policy</div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className="font-semibold text-xl text-[#072F53] my-3">
              Resources
            </div>
            <div>Free e-books</div>
            <div>Development Tutorial</div>
            <div>How to blog</div>
            <div>Youtube playlist</div>
          </div>
        </div>
      </div>
      <hr className="text-[#FBC108] border-1 my-8" />
      <div className="flex justify-between items-center">
        <div>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus orci
          imperdiet quis eros hendrerit nascetur egestas pulvinar.
        </div>
        <div className="flex gap-5 text-xl">
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
