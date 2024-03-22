import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "BOOKING",
      link: "#work",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header className="text-[#a4aead] h-[3.75rem] 2xl:h-[4.75rem] bg-[#1d2126] w-full px-[9.75rem] 2xl:px-[18.4rem] flex justify-between items-center fixed top-0 z-10">
      <div className="logo">
        <a href="#">
          <h1 className="text-[#D3D3D3] font-[900] text-[2rem]">Trin Train</h1>
        </a>
        {/* <img src="/assets/logo.png" alt="modest logo" /> */}
      </div>
      <nav>
        <ul className="flex gap-8 items-center text-[0.875rem] font-[500]">
          {links.map((link) => (
            <li key={link.link}>
              <a
                href={link.link}
                className={`px-2 py-1 rounded-[0.185rem] hover:border hover:border-[#a4aead] transition-all duration-300 ease-in uppercase ${
                  activeSection === link.link.slice(1)
                    ? "border border-primary-color text-primary-color hover:border hover:border-primary-color"
                    : "border border-transparent"
                }`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "@/utils/cn";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const sections = document.querySelectorAll("section");
//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         if (
//           scrollPosition >= sectionTop &&
//           scrollPosition < sectionTop + sectionHeight
//         ) {
//           setActive(section.id);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const links = [
//     {
//       name: "Home",
//       link: "#",
//     },
//     {
//       name: "About",
//       link: "#about",
//     },
//     {
//       name: "BOOKING",
//       link: "#work",
//     },
//     {
//       name: "Team",
//       link: "#team",
//     },
//     {
//       name: "Services",
//       link: "#services",
//     },
//     {
//       name: "Features",
//       link: "#features",
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//     },
//   ];

//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//         <ul className="flex gap-8 items-center text-[0.875rem] font-[500]">
//           {links.map((link) => (
//             <MenuItem key={link.link} setActive={setActive} active={active} item={link.name}>
//               <a
//                 href={link.link}
//                 className={`px-2 py-1 rounded-[0.185rem] hover:border hover:border-[#a4aead] transition-all duration-300 ease-in uppercase ${
//                   active === link.link.slice(1)
//                     ? "border border-primary-color text-primary-color hover:border hover:border-primary-color"
//                     : "border border-transparent"
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </MenuItem>
//           ))}
//         </ul>
//       </Menu>
//     </div>
//   );
// }

// export default Navbar;
