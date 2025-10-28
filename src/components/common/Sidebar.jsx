// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiBarChart2,
//   FiFolder,
//   FiFileText,
//   FiSettings,
// } from "react-icons/fi";
// import { MdGridOn } from "react-icons/md";
// import { RiUser3Line } from "react-icons/ri";

// const Sidebar = () => {
//   const [activeMenuItem, setActiveMenuItem] = useState(0);
//   const navigate = useNavigate(); // Hook for navigation
//   const location = useLocation();

//   const menuItems = [
//     { id: 0, icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
//     {
//       id: 1,
//       icon: <MdGridOn />,
//       label: "Use Case Registry",
//       path: "/use-case-registry",
//     },
//     { id: 2, icon: <FiFolder />, label: "Projects", path: "/projects" },
//     { id: 3, icon: <FiFileText />, label: "Reports", path: "/reports" },
//     { id: 4, icon: <FiSettings />, label: "Settings", path: "/settings" },
//     { id: 5, icon: <RiUser3Line />, label: "Profile", path: "/profile" },
//   ];

//   const handleMenuClick = (itemId, path) => {
//     setActiveMenuItem(itemId);
//     navigate(path); // Navigate to the route
//   };

//   return (
//     <aside
//       className="hidden lg:flex fixed left-0 top-0 h-full w-20 flex-col justify-center items-center shadow-[0px_20px_60px_#d94b4b1e] bg-gradient-to-b from-[#eb1700] to-[#110000] z-40"
//       style={{ width: "4%", minWidth: "80px" }}
//     >
//       <div className="flex flex-col gap-7 justify-start items-start flex-1 pt-6">
//         {/* Logo */}
//         <div className="flex justify-center items-center w-full">
//           <img
//             src="/images/img_sidebar_logo.svg"
//             alt="Logo"
//             className="w-8 h-11"
//           />
//         </div>

//         {/* Divider Line */}
//         <div className="flex justify-center w-full mt-6">
//           <img src="/images/img_vector_1.png" alt="" className="w-12 h-px" />
//         </div>

//         {/* Menu Items */}
//         <nav className="flex flex-col gap-12 justify-start items-center w-full flex-1 mt-4">
//           <div className="flex flex-col justify-start items-center w-full">
//             {menuItems.slice(0, -1).map((item) => {
//               const isActive = location.pathname === item.path;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => {
//                     if (!item.path) return; // No navigation
//                     navigate(item.path);
//                   }}
//                   disabled={!item.path} // disable button if no path
//                   className={`flex justify-center items-center w-14 h-14 p-2 mb-2 rounded-lg transition-all duration-200 ${
//                     !item.path
//                       ? "opacity-50 cursor-not-allowed"
//                       : "hover:opacity-90"
//                   }`}
//                   role="menuitem"
//                   aria-label={item.label}
//                   title={item.path ? item.label : "Coming Soon"}
//                 >
//                   <div
//                     className={`flex justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 ${
//                       location.pathname === item.path
//                         ? "bg-[#eb1700] shadow-md shadow-[#eb1700]/50 text-white"
//                         : "bg-white text-[#7a7a7a]"
//                     }`}
//                   >
//                     {item.icon}
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Bottom Profile Icon */}
//           <div className="mt-auto mb-6">
//             <button
//               onClick={() =>
//                 handleMenuClick(menuItems.length - 1, menuItems[5].path)
//               }
//               className="flex justify-center items-center w-14 h-14 p-2 rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none"
//               role="menuitem"
//               aria-label="Profile"
//               title="Profile"
//             >
//               <div
//                 className={`flex justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 ${
//                   activeMenuItem === menuItems.length - 1
//                     ? "bg-[#eb1700]"
//                     : "bg-white"
//                 }`}
//               >
//                 <div
//                   className={`text-2xl transition-colors duration-300 ${
//                     activeMenuItem === menuItems.length - 1
//                       ? "text-white"
//                       : "text-[#7a7a7a]"
//                   }`}
//                 >
//                   <RiUser3Line />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiFolder, FiFileText, FiSettings } from "react-icons/fi";
import { MdGridOn } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 0, icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
    {
      id: 1,
      icon: <MdGridOn />,
      label: "Use Case Registry",
      path: "/use-case-registry",
    },
    { id: 2, icon: <FiFolder />, label: "Projects" }, // No path yet
    { id: 3, icon: <FiFileText />, label: "Reports" }, // No path yet
    { id: 4, icon: <FiSettings />, label: "Settings" }, // No path yet
    { id: 5, icon: <RiUser3Line />, label: "Profile", path: "/profile" },
  ];

  const handleMenuClick = (item) => {
    setActiveMenuItem(item.id);
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 h-full flex-col justify-center items-center shadow-[0px_20px_60px_#d94b4b1e] bg-gradient-to-b from-[#eb1700] to-[#110000] z-40"
      style={{ width: "4%", minWidth: "80px" }}
    >
      <div className="flex flex-col gap-7 justify-start items-start flex-1 pt-6">
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <img
            src="/images/img_sidebar_logo.svg"
            alt="Logo"
            className="w-8 h-11"
          />
        </div>

        {/* Divider */}
        <div className="flex justify-center w-full mt-6">
          <img src="/images/img_vector_1.png" alt="" className="w-12 h-px" />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-12 justify-start items-center w-full flex-1 mt-4">
          <div className="flex flex-col justify-start items-center w-full">
            {menuItems.slice(0, -1).map((item) => {
              // Active if route matches OR item was clicked (for items without path)
              const isActive =
                location.pathname === item.path || activeMenuItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  className={`flex justify-center items-center w-14 h-14 p-2 mb-2 rounded-lg transition-all duration-200 ${
                    !item.path ? "cursor-pointer" : "hover:opacity-90"
                  }`}
                  role="menuitem"
                  aria-label={item.label}
                  title={item.path ? item.label : "Coming Soon"}
                >
                  <div
                    className={`flex justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-[#eb1700] shadow-md shadow-[#eb1700]/50 text-white"
                        : "bg-white text-[#7a7a7a]"
                    }`}
                  >
                    {item.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Profile Icon */}
          <div className="mt-auto mb-6">
            <button
              onClick={() => handleMenuClick(menuItems[5])}
              className="flex justify-center items-center w-14 h-14 p-2 rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none"
              role="menuitem"
              aria-label="Profile"
              title="Profile"
            >
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 ${
                  activeMenuItem === 5 || location.pathname === "/profile"
                    ? "bg-[#eb1700] text-white"
                    : "bg-white text-[#7a7a7a]"
                }`}
              >
                {menuItems[5].icon}
              </div>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
