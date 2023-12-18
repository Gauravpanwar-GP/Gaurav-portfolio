import { Download, Menu } from "lucide";
import { DownloadIcon, MenuIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#212121] py-4 px-4 md:px-10 flex justify-between items-center text-[#FFFFFF] sticky top-0 z-10">
      <div className="w-[20%]">
        <h1 className="font-rubik text-[2em] font-bold text-[#FFFFFF]">
          GAURAV
        </h1>
      </div>
      <div className="block md:hidden">
        <MenuIcon />
      </div>
      <div className="w-[60%] hidden md:block">
        <ul className="flex justify-center items-center gap-8">
          <li className="cursor-pointer font-semibold mix-blend-difference">ABOUT</li>
          <li className="cursor-pointer font-semibold mix-blend-difference">PROJECTS</li>
          <li className="cursor-pointer font-semibold mix-blend-difference">SKILLS</li>
          <li className="cursor-pointer font-semibold mix-blend-difference">CONTACT</li>
        </ul>
      </div>
      <div className="w-[20%] hidden md:flex justify-end">
        <button className="flex gap-3 items-center bg-[#FFFFFF] py-2 px-4 text-[#212121] font-semibold rounded-[10px] text-sm shadow-[0px_2px_10px_#FAB84D]">
          <DownloadIcon />
           RESUME
        </button>
      </div>
    </div>
  );
};

export default Header;
