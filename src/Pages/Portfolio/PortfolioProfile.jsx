// import { useDispatch, useSelector } from "react-redux";
// import { test } from "../../Redux/Slices/portfolioSlice";

// const Portfolio = () => {
//   const demo = useSelector((state) => state.portfolio.name);
//   console.log(demo, "");
//   const dispatch = useDispatch();

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-600 text-white p-6">
//         {/* <h2 className="text-xl font-bold mb-8">Dashboard</h2> */}
//         <nav className="flex flex-col space-y-4">
//           <a href="#" className="hover:text-blue-200">
//             Explore
//           </a>
//           <a href="#" className="hover:text-blue-200">
//             My Dashboard
//           </a>
//           <a href="#" className="hover:text-blue-200">
//             Template Library
//           </a>
//           <a href="#" className="hover:text-blue-200">
//             Portfolio
//           </a>
//           <a href="#" className="hover:text-blue-200">
//             Settings
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50 p-8">
//         <h1 className="text-2xl font-semibold mb-6">Edit Portfolio</h1>

//         {/* Form */}
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
//           <div>
//             <label className="block font-medium mb-2">Name</label>
//             <input
//               type="text"
//               value={demo}
//               className="w-full border rounded px-4 py-2"
//               placeholder="John Doe"
//               onChange={(e) => dispatch(test(e.target.value))}
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-2">
//               Professional Summary
//             </label>
//             <textarea
//               className="w-full border rounded px-4 py-2"
//               rows="4"
//               placeholder="A brief summary about your experience..."
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-2">Work Experience</label>
//             <textarea
//               className="w-full border rounded px-4 py-2"
//               rows="3"
//               placeholder="Your work history..."
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-2">Skills</label>
//             <input
//               type="text"
//               className="w-full border rounded px-4 py-2"
//               placeholder="JavaScript, React, etc."
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-2">Education</label>
//             <input
//               type="text"
//               className="w-full border rounded px-4 py-2"
//               placeholder="Your degrees or certifications"
//             />
//           </div>

//           <div>
//             <label className="block font-medium mb-2">Projects</label>
//             <textarea
//               className="w-full border rounded px-4 py-2"
//               rows="3"
//               placeholder="Describe your projects..."
//             />
//           </div>

//           <div className="col-span-2 text-right">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//             >
//               Save Portfolio
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default Portfolio;

import BasicInfo from "./PortfolioSteps/BasicInfo";
import Contact from "./PortfolioSteps/Contact";
import SocialLinks from "./PortfolioSteps/SocialLinks";
import Skills from "./PortfolioSteps/Skills";
import Experience from "./PortfolioSteps/Experience";
import Projects from "./PortfolioSteps/Projects";
import Education from "./PortfolioSteps/Education";
import Certifications from "./PortfolioSteps/Certifications";
import Achievements from "./PortfolioSteps/Achievements";

const PortfolioProfile = () => {
  return (
    <div>
      <BasicInfo />
      <Contact />
      <SocialLinks />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
    </div>
  );
};

export default PortfolioProfile;
