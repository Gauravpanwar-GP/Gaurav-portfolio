import React from "react";
import { GithubIcon, Instagram, LinkedinIcon } from "lucide-react";

const Home = () => {
  return (
    <div className="h-[calc(100vh-150px)] md:h-[calc(100vh-80px)] md:items-center flex justify-end py-10 px-4 md:py-20 md:px-32 profile-bg relative">
      <div className="md:w-[60%]">
        <p className="text-[1.2em] md:text-[2em]">I'M</p>
        <p className="font-bold text-[3em] text-[#FAB84D]">Gaurav Panwar,</p>
        <p className="text-[1em] md:text-[1.5em]">
          A Frontend Web Developer dedicated to constructing interactive User
          Experiences (UX) and crafting sleek Interfaces (UI). My primary focus
          is on designing attractive, clean-cut user interfaces.
        </p>
        <button className="border-2 border-[#FAB84D] text-[#FAB84D] rounded-[10px] py-2 px-4 font-semibold mt-6">
          CONTACT ME
        </button>
      </div>
      <div className="fixed bottom-6 right-10 hidden md:block">
        <ul className="grid gap-3 vertical-line">
          <li className="hover:bg-[#FAB84D] bg-white mix-blend-difference p-2 rounded-full relative group cursor-pointer">
            <GithubIcon className="text-[#212121] group-hover:text-[#FFFFFF]" />
            <p className="hidden group-hover:block bg-[#595959] text-white absolute top-[50%] px-2 py-1 text-[12px] rounded-[8px] -translate-y-[50%] right-[50px]">
              GitHub
            </p>
          </li>
          <li className="hover:bg-[#FAB84D] bg-white p-2 rounded-full relative group cursor-pointer">
            <LinkedinIcon className="text-[#212121] group-hover:text-[#FFFFFF]" />
            <p className="hidden group-hover:block bg-[#595959] text-white absolute top-[50%] px-2 py-1 text-[12px] rounded-[8px] -translate-y-[50%] right-[50px]">
              LinkedIn
            </p>
          </li>
          <li className="hover:bg-[#FAB84D] bg-white p-2 rounded-full relative group cursor-pointer">
            <Instagram className="text-[#212121] group-hover:text-[#FFFFFF]" />
            <p className="hidden group-hover:block bg-[#595959] text-white w-auto absolute top-[50%] px-2 py-1 text-[12px] rounded-[8px] -translate-y-[50%] right-[50px]">
              Instagram
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
