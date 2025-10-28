// import React, { useState } from "react";

// const Sidebar = () => {
//   const [activeMenuItem, setActiveMenuItem] = useState(0);

//   const menuItems = [
//     {
//       id: 0,
//       icon: "/images/img_overlay_border_shadow.png",
//       label: "Dashboard",
//       isActive: true,
//     },
//     {
//       id: 1,
//       icon: "/images/img_button.svg",
//       label: "Analytics",
//       isActive: false,
//     },
//     {
//       id: 2,
//       icon: "/images/img_overlay_border_shadow_white_a700_01.svg",
//       label: "Projects",
//       isActive: false,
//     },
//     {
//       id: 3,
//       icon: "/images/img_overlay_border_shadow_white_a700_01_20x50.svg",
//       label: "Reports",
//       isActive: false,
//     },
//     {
//       id: 4,
//       icon: "/images/img_overlay_border_shadow_20x50.svg",
//       label: "Settings",
//       isActive: false,
//     },
//     {
//       id: 5,
//       icon: "/images/img_overlay_border_shadow_1.svg",
//       label: "Help",
//       isActive: false,
//     },
//   ];

//   const handleMenuClick = (itemId) => {
//     setActiveMenuItem(itemId);
//   };

//   return (
//     <>
//       {/* Mobile Menu Toggle Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-accent-color text-white rounded-lg shadow-lg"
//         aria-label="Toggle menu"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </button>
//       {/* Sidebar */}
//       <aside
//         className="hidden lg:flex fixed left-0 top-0 h-full w-20 flex-col justify-center items-center shadow-[0px_20px_60px_#d94b4b1e] bg-gradient-to-b from-[#eb1700] to-[#110000] z-40"
//         style={{ width: "4%", minWidth: "80px" }}
//       >
//         <div className="flex flex-col gap-7 justify-start items-start flex-1 pt-6">
//           {/* Logo */}
//           <div className="flex justify-center items-center w-full">
//             <img
//               src="/images/img_sidebar_logo.svg"
//               alt="Logo"
//               className="w-8 h-11"
//             />
//           </div>

//           {/* Divider Line */}
//           <div className="flex justify-center w-full mt-6">
//             <img src="/images/img_vector_1.png" alt="" className="w-12 h-px" />
//           </div>

//           {/* Menu Items */}
//           <nav className="flex flex-col gap-12 justify-start items-center w-full flex-1 mt-4">
//             <div className="flex flex-col justify-start items-center w-full">
//               {menuItems?.slice(0, -1)?.map((item) => (
//                 <button
//                   key={item?.id}
//                   onClick={() => handleMenuClick(item?.id)}
//                   className={`
//       flex justify-center items-center
//       w-14 h-14 p-2 mb-2
//       rounded-lg transition-all duration-200
//       hover:opacity-80 focus:outline-none
//       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600
//       bg-transparent
//     `}
//                   role="menuitem"
//                   aria-label={item?.label}
//                   title={item?.label}
//                 >
//                   <img
//                     src={item?.icon}
//                     alt={item?.label}
//                     className={`w-7 h-7 object-contain transition-all duration-200 ${
//                       activeMenuItem === item?.id
//                         ? "brightness-0 saturate-100 invert-[15%] sepia-[98%] saturate-[5000%] hue-rotate-[360deg] brightness-[100%] contrast-[100%]"
//                         : ""
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>

//             {/* Bottom Menu Item (Profile/Settings) */}
//             <div className="mt-auto mb-6">
//               <button
//                 onClick={() => handleMenuClick(menuItems?.length - 1)}
//                 className={`
//       flex justify-center items-center
//       w-14 h-14 p-2 rounded-lg
//       transition-all duration-200
//       hover:opacity-80 focus:outline-none
//       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600
//       ${
//         activeMenuItem === menuItems.length - 1
//           ? "bg-gradient-to-r from-[#ffef9942] to-[#ffffff42] shadow-md"
//           : "bg-transparent"
//       }
//     `}
//                 role="menuitem"
//                 aria-label="Profile"
//                 title="Profile"
//               >
//                 <img
//                   src="/images/img_jnj_d_1.png"
//                   alt="Profile"
//                   className="w-7 h-7 object-contain"
//                 />
//               </button>
//             </div>
//           </nav>
//         </div>
//       </aside>
//       {/* Mobile Sidebar Overlay */}
//       <div
//         className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 hidden"
//         id="mobile-sidebar-overlay"
//       >
//         <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#eb1700] to-[#110000] shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out">
//           <div className="flex flex-col h-full p-4">
//             {/* Logo */}
//             <div className="flex justify-center items-center mb-8">
//               <img
//                 src="/images/img_sidebar_logo.svg"
//                 alt="Logo"
//                 className="w-8 h-11"
//               />
//             </div>

//             {/* Menu Items */}
//             <nav className="flex flex-col gap-2 flex-1">
//               {menuItems?.map((item) => (
//                 <button
//                   key={item?.id}
//                   onClick={() => handleMenuClick(item?.id)}
//                   className={`
//         flex items-center gap-3 p-2 rounded-lg
//         text-white transition-all duration-200
//         hover:bg-white hover:bg-opacity-10
//         focus:outline-none focus:ring-2 focus:ring-white
//         ${activeMenuItem === item?.id ? "bg-white bg-opacity-20" : ""}
//       `}
//                   role="menuitem"
//                 >
//                   <img
//                     src={item?.icon}
//                     alt=""
//                     className="w-5 h-5 object-contain"
//                   />
//                   <span className="text-sm font-medium">{item?.label}</span>
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  FiHome,
  FiBarChart2,
  FiFolder,
  FiFileText,
  FiSettings,
} from "react-icons/fi";
import { MdGridOn } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const menuItems = [
    { id: 0, icon: <FiHome />, label: "Dashboard" },
    { id: 1, icon: <MdGridOn />, label: "Analytics" },
    { id: 2, icon: <FiFolder />, label: "Projects" },
    { id: 3, icon: <FiFileText />, label: "Reports" },
    { id: 4, icon: <FiSettings />, label: "Settings" },
    { id: 5, icon: <RiUser3Line />, label: "Profile" },
  ];

  const handleMenuClick = (itemId) => {
    setActiveMenuItem(itemId);
  };

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 h-full w-20 flex-col justify-center items-center shadow-[0px_20px_60px_#d94b4b1e] bg-gradient-to-b from-[#eb1700] to-[#110000] z-40"
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

        {/* Divider Line */}
        <div className="flex justify-center w-full mt-6">
          <img src="/images/img_vector_1.png" alt="" className="w-12 h-px" />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-12 justify-start items-center w-full flex-1 mt-4">
          <div className="flex flex-col justify-start items-center w-full">
            {menuItems.slice(0, -1).map((item) => {
              const isActive = activeMenuItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className="flex justify-center items-center w-14 h-14 p-2 mb-2 rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none"
                  role="menuitem"
                  aria-label={item.label}
                  title={item.label}
                >
                  <div
                    className={`flex justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-[#eb1700] shadow-md shadow-[#eb1700]/50"
                        : "bg-white"
                    }`}
                  >
                    <div
                      className={`text-2xl transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#7a7a7a]"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Profile Icon */}
          <div className="mt-auto mb-6">
            <button
              onClick={() => handleMenuClick(menuItems.length - 1)}
              className="flex justify-center items-center w-14 h-14 p-2 rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none"
              role="menuitem"
              aria-label="Profile"
              title="Profile"
            >
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 ${
                  activeMenuItem === menuItems.length - 1
                    ? "bg-[#eb1700]"
                    : "bg-white"
                }`}
              >
                <div
                  className={`text-2xl transition-colors duration-300 ${
                    activeMenuItem === menuItems.length - 1
                      ? "text-white"
                      : "text-[#7a7a7a]"
                  }`}
                >
                  <RiUser3Line />
                </div>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
