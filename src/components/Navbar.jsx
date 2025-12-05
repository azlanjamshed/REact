// // import React from "react";
// // import { motion } from "framer-motion";
// // import "../index.css";
// // const Navbar = () => {
// //   return (
// //     <>
// //       <div className="rounded-2xl bg-[#171717] m-4">
// //         <ul className="text-white flex gap-10 p-4 justify-center items-center">
// //           {/* Each li */}
// //           {["About Me", "Experiences", "Recommended"].map((item) => (
// //             <li
// //               key={item}
// //               className="relative py-2 px-4 rounded-2xl cursor-pointer overflow-hidden  group"
// //             >
// //               {/* Text */}
// //               <span className="relative z-10">{item}</span>

// //               {/* Green Fill Animation */}
// //               <span
// //                 className="
// //             absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700
// //             scale-x-0 origin-left
// //             opacity-0
// //             transition-all duration-800 ease-out
// //             group-hover:scale-x-100
// //             group-hover:opacity-100
// //           "
// //               ></span>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const items = ["About Me", "Experiences", "Recommended"];
//   const [active, setActive] = useState(0);
//   const [dimensions, setDimensions] = useState({
//     width: 0,
//     left: 0,
//     top: 0,
//     height: 0,
//   });
//   const refs = useRef([]);

//   useEffect(() => {
//     const current = refs.current[active];
//     if (current) {
//       const { offsetWidth, offsetLeft, offsetTop, offsetHeight } = current;
//       setDimensions({
//         width: offsetWidth,
//         left: offsetLeft,
//         top: offsetTop,
//         height: offsetHeight,
//       });
//     }
//   }, [active]);

//   return (
//     <div className="rounded-2xl bg-[#171717] m-4 relative">
//       <ul className="relative text-white flex gap-10 p-4 justify-center items-center">
//         {/* Sliding active background */}
//         <motion.div
//           className="absolute bg-gray-800 rounded-2xl z-0"
//           layout
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           style={{
//             width: dimensions.width,
//             height: dimensions.height,
//             left: dimensions.left,
//             top: dimensions.top,
//           }}
//         />

//         {/* Menu items */}
//         {items.map((item, index) => {
//           const isActive = index === active;
//           return (
//             <li
//               key={item}
//               ref={(el) => (refs.current[index] = el)}
//               className="relative z-10 py-2 px-4 rounded-2xl cursor-pointer overflow-hidden group"
//               onClick={() => setActive(index)}
//             >
//               {/* Text */}
//               <span className="relative z-10">{item}</span>

//               {/* Hover gradient fill only if NOT active */}
//               {!isActive && (
//                 <span
//                   className="
//                     absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700
//                     scale-x-0 origin-left
//                     opacity-0
//                     transition-all duration-800 ease-out
//                     group-hover:scale-x-100
//                     group-hover:opacity-100
//                   "
//                 ></span>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const items = [
    { name: "About Me", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "Recommended", path: "/recommended" },
  ];

  const location = useLocation();
  const activeIndex = items.findIndex(
    (item) => item.path === location.pathname
  );

  const [dimensions, setDimensions] = useState({
    width: 0,
    left: 0,
    top: 0,
    height: 0,
  });
  const refs = useRef([]);

  useEffect(() => {
    const current = refs.current[activeIndex];
    if (current) {
      const { offsetWidth, offsetLeft, offsetTop, offsetHeight } = current;
      setDimensions({
        width: offsetWidth,
        left: offsetLeft,
        top: offsetTop,
        height: offsetHeight,
      });
    }
  }, [activeIndex]);

  return (
    <div className="rounded-2xl bg-[#171717]  relative mx-14">
      <ul className="relative text-white flex gap-10 p-4 justify-center items-center">
        {/* Sliding active background */}
        {activeIndex !== -1 && (
          <motion.div
            className="absolute bg-gray-400 rounded-2xl z-0"
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              width: dimensions.width,
              height: dimensions.height,
              left: dimensions.left,
              top: dimensions.top,
            }}
          />
        )}

        {/* Menu items */}
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <li
              key={item.name}
              ref={(el) => (refs.current[index] = el)}
              className="relative z-10 py-2 px-4 rounded-2xl cursor-pointer overflow-hidden group"
            >
              {/* Text with Link */}
              <Link to={item.path} className="relative z-10">
                {item.name}
              </Link>

              {/* Hover gradient fill only if NOT active */}
              {!isActive && (
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700
                    scale-x-0 origin-left
                    opacity-0
                    transition-all duration-800 ease-out
                    group-hover:scale-x-100
                    group-hover:opacity-100
                  "
                ></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
