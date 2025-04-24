import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FaCompass,
  FaTachometerAlt,
  FaUserEdit,
  FaLayerGroup,
  FaCogs,
} from "react-icons/fa";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const navItems = [
  { name: "Explore", path: "/portfolio/explore", icon: <FaCompass /> },
  {
    name: "My Dashboard",
    path: "/portfolio/dashboard",
    icon: <FaTachometerAlt />,
  },
  { name: "Portfolio", path: "/portfolio/portfolio", icon: <FaUserEdit /> },
  {
    name: "Template Library",
    path: "/portfolio/templates",
    icon: <FaLayerGroup />,
  },
  { name: "Settings", path: "/portfolio/settings", icon: <FaCogs /> },
];

const PortfolioLayout = () => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").pop().replace("-", " ");
  const [open, setOpen] = useState(true);

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`hidden md:flex flex-col justify-between bg-white shadow-lg transition-all duration-300 ${
          open ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 transition-all duration-300">
          <div className="text-xl font-bold text-blue-600 mb-6 transition-all duration-300 text-center">
            {open ? " TechMindZ" : "TZ"}
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map(({ name, path, icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-2 rounded-md transition-all duration-200 text-lg font-medium ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`
                }
              >
                <span className="py-1">{icon}</span>
                {open ? (
                  <span className="whitespace-nowrap transition-all text-sm duration-400">
                    {name}
                  </span>
                ) : (
                  ""
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Toggle Button at Bottom */}
        <div
          className="p-4 flex items-center justify-center text-gray-700 hover:bg-blue-100 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <MdOutlineKeyboardArrowLeft size={24} />
          ) : (
            <MdOutlineKeyboardArrowRight size={24} />
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col transition-all duration-300 max-h-screen ">
        <div className="bg-white border-b shadow px-6 py-4 text-xl font-semibold text-gray-800 capitalize flex items-center gap-3">
          {currentPage}
        </div>

        <div className="p-6 h-full overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
