import { Download } from "lucide";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#34353a] py-4 px-10 flex justify-between items-center text-[#FFFFFF] sticky top-0">
      <div className="w-[20%]">
        <h1 className="font-rubik text-[2em] font-bold text-[#FFFFFF]">
          GAURAV
        </h1>
      </div>
      <div className="w-[60%]">
        <ul className="flex justify-center items-center gap-8">
          <li className="cursor-pointer font-semibold">ABOUT</li>
          <li className="cursor-pointer font-semibold">PROJECTS</li>
          <li className="cursor-pointer font-semibold">SKILLS</li>
          <li className="cursor-pointer font-semibold">CONTACT</li>
        </ul>
      </div>
      <div className="w-[20%] flex justify-end">
        <button className="flex gap-3 items-center bg-[#FFFFFF] py-2 px-4 text-[#212121] font-semibold rounded-[10px] text-sm shadow-[0px_2px_10px_#f3f3f3]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-download"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>{" "}
           RESUME
        </button>
      </div>
    </div>
  );
};

export default Header;
