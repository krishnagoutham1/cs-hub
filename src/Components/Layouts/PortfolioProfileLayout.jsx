import { Link, Outlet } from "react-router-dom";

const PortfolioProfileLayout = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Portfolio Steps
        </h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="basic-info"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Basic Info
            </Link>
          </li>
          <li>
            <Link
              to="certifications"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="education"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="social-links"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Social Links
            </Link>
          </li>
          <li>
            <Link
              to="achievements"
              className="hover:bg-gray-700 p-2 rounded block transition-colors"
            >
              Achievements
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6">Portfolio Profile</h2>
        {/* The outlet will render the corresponding step component */}
        <Outlet />
      </div>
    </div>
  );
};

export default PortfolioProfileLayout;
