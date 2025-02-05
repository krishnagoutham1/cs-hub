import AboutDots from "../assets/about-dots.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import CurvesBg from "../assets/Home-bg.png";
import AnimeBg from "../assets/about-hero.jpeg";
import PeopleGroup from "../assets/peopleGroup.jpeg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaJava, FaBootstrap, FaPhp } from "react-icons/fa";

const About = () => {
  const cardData = [
    {
      name: "HTML",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: <FaHtml5 className="text-orange-600" />,
      bg: "bg-[rgb(254,215,206)]",
    },
    {
      name: "CSS",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: <FaCss3Alt className="text-blue-600" />,
      bg: "bg-[rgb(179,193,249)]",
    },
    {
      name: "JavaScript",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: <FaJs className="text-yellow-500" />,
      bg: "bg-[rgb(254,248,214)]",
    },
    {
      name: "Java",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: <FaJava className="text-red-500" />,
      bg: "bg-[rgb(254,230,208)]",
    },
    {
      name: "Bootstrap",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: <FaBootstrap className="text-purple-500" />,
      bg: "bg-[rgb(237,225,254)]",
    },
    {
      name: "PHP",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: <FaPhp className="text-indigo-500" />,
      bg: "bg-[rgb(232,233,254)]",
    },
  ];

  return (
    <div>
      {/* Sec 1 */}
      <div
        style={{ backgroundImage: `url(${AboutDots})` }}
        className="px-[5%] py-8"
      >
        <button className="bg-[#FBC108] text-[#072F53] font-bold text-xl px-5 py-2 rounded-md mb-5">
          Who we are
        </button>
        <div className="text-[#072F53] text-3xl font-bold mb-5">
          Indias largest online prepration platform for olympid exam
        </div>
        <p className="mb-5 text-md">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus.
        </p>
        <button className="bg-[#072F53] px-4 py-2 rounded-3xl text-white text-md">
          Read More
        </button>
      </div>

      {/* Sec 2 */}
      <div className="bg-[#072F53] flex flex-wrap items-center justify-evenly p-5 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CurvesBg})`, opacity: 0.1 }}
        ></div>
        <div className="flex items-center justify-center gap-5">
          <FaPeopleGroup className="text-white text-8xl" />
          <div className="text-center">
            <h3 className="text-xl text-white">Registered Users</h3>
            <h2 className="text-[#FBC108] font-bold text-4xl">10,000+</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <BsFillBuildingsFill className="text-white text-8xl" />
          <div className="text-center">
            <h3 className="text-xl text-white">Towers And cities</h3>
            <h2 className="text-[#FBC108] font-bold text-4xl">600+</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <FaNewspaper className="text-white text-8xl" />
          <div className="text-center">
            <h3 className="text-xl text-white">Questions and test papers</h3>
            <h2 className="text-[#FBC108] font-bold text-4xl">30,000+</h2>
          </div>
        </div>
      </div>

      {/* Sec 3 */}
      <div className="relative px-[5%] py-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url(${AnimeBg})`,
          }}
        ></div>
        <div className="relative">
          <div className="text-[#072F53] text-3xl font-bold mb-5 z-10">
            How it works
          </div>
          <p className="mb-5 text-md">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum.
          </p>

          <div className="flex justify-around flex-wrap md:mb-28 mb-10">
            {cardData.map((item, i) => {
              return (
                <div
                  className="text-center w-96 gap-5 my-5 bg-gray-50 shadow-2xl shadow-gray-600 rounded-2xl"
                  key={i}
                >
                  <div
                    className={`flex justify-center ${item.bg} py-2 text-7xl rounded-t-2xl`}
                  >
                    {item.icon}
                  </div>
                  <div className="bg-[rgba(244,244,244,0.3)] px-5 text-[#072F53] rounded-b-2xl">
                    <h1 className="text-3xl py-5 font-bold">{item.name}</h1>
                    <p className="text-md pb-8">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sec 4 */}
          <div className="flex items-center my-6 relative bg-transparent">
            <div className="w-4/8 relative z-1 rounded-2xl">
              <img src={PeopleGroup} className="rounded-2xl" />
            </div>
            <div className="w-3/5 z-2 bg-white absolute rounded-2xl left-[40%] p-8 shadow-2xl">
              <button className="bg-[#FBC108] text-[#072F53] font-bold text-xl px-5 py-2 rounded-md mb-5">
                Top Categories
              </button>
              <div className="text-[#072F53] text-3xl font-bold mb-5">
                Career Development
              </div>
              <p className="mb-5 text-md">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium.
              </p>
              <button className="bg-[#FBC108] px-4 py-2 rounded-3xl text-[#072F53] text-md font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//   const steps = [
//     {
//       id: 1,
//       title: "Sign Up",
//       description:
//         "Create your account in just a few clicks. Register with CS BUZZ to start your journey into the world of computer science. Just enter your details and you’re ready to go!",
//     },
//     {
//       id: 2,
//       title: "Choose Your Course",
//       description:
//         "Browse through our extensive catalog of computer science courses. Whether you’re interested in learning the basics of programming, data science, or diving deep into artificial intelligence, we have something for every level of expertise.",
//     },
//     {
//       id: 3,
//       title: "Personalize Your Learning Experience",
//       description:
//         "Set your learning goals and preferences. Our adaptive learning system will suggest the most effective path for you, adjusting to your pace and style. You can also choose to focus on specific topics or projects that interest you the most.",
//     },
//     {
//       id: 4,
//       title: "Engage with Interactive Learning",
//       description:
//         "Start learning through interactive lessons that make complex concepts easy to grasp. With hands-on projects and practical coding exercises, you can apply and retain knowledge effectively.",
//     },
//   ];
