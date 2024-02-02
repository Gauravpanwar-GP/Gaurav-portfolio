import React from "react";
import gym from "../../assets/images/gym.png";
import flipkart from "../../assets/images/flipkart.png";
import portfolio from "../../assets/images/portfolio.png";
import oldPortfolio from "../../assets/images/old-portfolio.png";

const Projects = () => {
  return (
    <React.Fragment>
      <section
        id="projects"
        className="px-4 py-10 md:py-10 md:px-20 bg-[#212121]"
      >
        <h1 className="text-[38px] font-bold text-center">Projects</h1>
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-10 mt-10 max-w-[1024px] mx-auto">
          <div className="grid md:w-[300px] text-center justify-center border-[1px] rounded-[10px] border-[#adadad] overflow-hidden h-[300px]">
            <img src={gym} />
            <div className="text-left p-4">
              <p className="text-[18px] font-semibold">Fitness Website</p>
              <p className="text-[14px] mt-4">
                HTML, CSS, JavaScript, PHP, MySql, Bootstrap
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:w-[300px] text-center justify-center border-[1px] rounded-[10px] border-[#adadad] overflow-hidden h-[300px]">
            <img src={flipkart} />
            <div className="text-left p-4">
              <p className="text-[18px] font-semibold">Flipkart Clone</p>
              <p className="text-[14px] mt-4">
                HTML, CSS, JavaScript, React JS, MUI
              </p>
            </div>
          </div>
          <div
            className="grid gap-4 md:w-[300px] text-center justify-center border-[1px] rounded-[10px] border-[#adadad] overflow-hidden cursor-pointer h-[300px]"
            onClick={() => {
              window.open("https://gauravpanwar.vercel.app/", "_blank");
            }}
          >
            <img src={portfolio} />
            <div className="text-left p-4">
              <p className="text-[18px] font-semibold">Portfolio</p>
              <p className="text-[14px] mt-4">
                HTML, CSS, JavaScript, React JS, tailwindCss
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-medium text-center my-4">
            I am presently designing my new Portfolio UI. In the meantime, feel
            free to explore my previous portfolio if you're interested.
          </p>
          <div
            className="grid mx-auto md:w-[300px] text-center justify-center border-2 rounded-[10px] border-[#adadad] cursor-pointer overflow-hidden h-[300px]"
            onClick={() => {
              window.open("https://gauravpanwar.vercel.app/", "_blank");
            }}
          >
            <img src={oldPortfolio} />
            <div className="text-left p-4">
              <p className="text-[18px] font-semibold">Old Portfolio</p>
              <p className="text-[14px] mt-4">
                HTML, CSS, JavaScript, React JS
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
