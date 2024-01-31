import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  GithubIcon,
  Instagram,
  LinkedinIcon,
} from "lucide-react";
import Lottie from "react-lottie";
import codeGif from "../../assets/lottie/Animation - 1706721120955.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: codeGif,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Home = () => {
  const [showText, setShowText] = useState(false);
  const [showSocialmedia, setShowSocialmedia] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="h-[calc(100vh-150px)] md:h-[calc(100vh-80px)] md:items-center flex flex-col md:flex-row py-10 px-4 md:py-20 md:px-32 profile-bg relative">
      <div className="md:w-[40%]">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
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

      <div className="fixed bottom-6 right-10 md:hidden block">
        {showSocialmedia && (
          <ul className="grid gap-3">
            <li className="hover:bg-[#FAB84D] bg-white mix-blend-difference p-2 rounded-full relative group cursor-pointer">
              <GithubIcon
                size={30}
                className="text-[#212121] group-hover:text-[#FFFFFF]"
              />
            </li>
            <li className="hover:bg-[#FAB84D] bg-white p-2 rounded-full relative group cursor-pointer">
              <LinkedinIcon
                size={30}
                className="text-[#212121] group-hover:text-[#FFFFFF]"
              />
            </li>
            <li className="hover:bg-[#FAB84D] bg-white p-2 rounded-full relative group cursor-pointer">
              <Instagram
                size={30}
                className="text-[#212121] group-hover:text-[#FFFFFF]"
              />
            </li>
          </ul>
        )}
        <p
          className="hover:bg-[#FAB84D] bg-white mix-blend-difference p-2 rounded-full relative cursor-pointer mt-4"
          onClick={() => {
            setShowSocialmedia(!showSocialmedia);
            setShowText(false);
          }}
        >
          {showSocialmedia ? (
            <ChevronDownIcon
              size={30}
              className="text-[#212121] group-hover:text-[#FFFFFF]"
            />
          ) : (
            <ChevronUpIcon
              size={30}
              className="text-[#212121] group-hover:text-[#FFFFFF]"
            />
          )}
          {showText && (
            <p className="bg-[#595959] text-white absolute top-[-80%] px-2 py-1 text-[16px] rounded-[8px] right-[0px] w-max">
              Let's Connect
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Home;
