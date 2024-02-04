import clsx from "clsx";
import { DownloadIcon, MenuIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import resume from "../assets/pdf/Gaurav_panwar_web_developer_resume.pdf";

const Header = () => {
  const [showHamMenu, setShowHamMenu] = useState(false);
  // useEffect(()=>{
  //   let sections = document.querySelectorAll('section');
  //   let navLinks = document.querySelectorAll('div ul li');

  //   window.onscroll = () => {
  //     sections.forEach(sec => {
  //       let top = window.scrollY;
  //       let offset = sec.offsetTop;
  //       let height = sec.offsetHeight;
  //       let id = sec.getAttribute('id');

  //       if(top >= offset && top < offset+height){
  //         navLinks.forEach(links => {
  //           links.classList.remove('active');
  //         })
  //       }
  //     })
  //   }
  // }, []);

  return (
    <div className="bg-[#212121] py-4 px-4 md:px-10 flex justify-between items-center sticky top-0 z-10">
      <div className="w-[20%]">
        <h1
          className="font-rubik text-[2em] font-bold text-[#FFFFFF] cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          GAURAV
        </h1>
      </div>
      {/* <div className="block md:hidden">
      </div> */}
      <div className="relative block lg:hidden">
        <div
          onClick={() => {
            setShowHamMenu(!showHamMenu);
          }}
        >
          {!showHamMenu ? <MenuIcon /> : <X />}
        </div>
        <ul
          className={clsx(
            "overflow-hidden transition-all duration-500 absolute mt-3 top-[38px] text-[#212121] -right-4 w-screen font-bold z-10 shadow bg-white text-center",
            showHamMenu ? "h-[224px] visible" : "h-0 invisible"
          )}
        >
          <li
            className="py-4 px-4 hover:bg-[#FAB84D] hover:text-[#FFFFFF]"
            onClick={() => {
              setShowHamMenu(false);
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </li>
          <li
            className="py-4 px-4 hover:bg-[#FAB84D] hover:text-[#FFFFFF]"
            onClick={() => {
              setShowHamMenu(false);
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </li>
          <li
            className="py-4 px-4 hover:bg-[#FAB84D] hover:text-[#FFFFFF]"
            onClick={() => {
              setShowHamMenu(false);
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </li>
          <li
            className="py-4 px-4 hover:bg-[#FAB84D] hover:text-[#FFFFFF]"
            onClick={() => {
              setShowHamMenu(false);
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Connect
          </li>
        </ul>
      </div>
      <div className="w-[60%] hidden md:block">
        <ul className="flex justify-center items-center gap-8">
          <li
            className={clsx(
              "cursor-pointer font-semibold mix-blend-difference border-effect"
            )}
            aria-current="page"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            ABOUT
          </li>
          <li
            className="cursor-pointer font-semibold mix-blend-difference border-effect"
            onClick={() => {
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            SKILLS
          </li>
          <li
            className="cursor-pointer font-semibold mix-blend-difference border-effect"
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROJECTS
          </li>
          <li
            className="cursor-pointer font-semibold mix-blend-difference border-effect"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </li>
        </ul>
      </div>
      <div className="w-[20%] hidden md:flex justify-end">
        <button
          className="flex gap-3 items-center bg-[#FFFFFF] py-2 px-4 text-[#212121] font-semibold rounded-[10px] text-sm shadow-[0px_2px_10px_#FAB84D]"
          onClick={() => {
            window.open(resume, "_blank");
          }}
        >
          <DownloadIcon />
          RESUME
        </button>
      </div>
    </div>
  );
};

export default Header;
