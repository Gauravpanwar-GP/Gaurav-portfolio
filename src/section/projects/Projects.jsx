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
        className="px-4 py-20 md:p-20 bg-[#3d3e42] min-h-screen"
      >
        <h1 className="text-[38px] font-bold text-center">Projects</h1>
        <div className="flex items-center justify-center flex-wrap gap-10 mt-10 max-w-[1024px] mx-auto">
          <div className="flex flex-col bg-[#212121] w-[300px] text-center h-[300px] project-border">
            <div className="h-[145px] flex">
              <img src={gym} className="h-auto object-cover" />
            </div>
            <div className="text-left p-4">
              <p className="text-[18px] font-semibold">Fitness Website</p>
              <p className="text-[14px] mt-4">
                HTML, CSS, JavaScript, PHP, MySql, Bootstrap
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-[#212121] w-[300px] text-center project-border h-[300px]">
            <div className="h-[145px] flex">
              <img src={flipkart} className="h-auto object-cover" />
            </div>
            <div className="text-left p-4">
              <p className="text-[18px] font-semibold">Flipkart Clone</p>
              <p className="text-[14px] mt-4">
                HTML, CSS, JavaScript, React JS, MUI
              </p>
            </div>
          </div>
          <div
            className="flex flex-col bg-[#212121] w-[300px] text-center cursor-pointer h-[300px]"
            onClick={() => {
              window.open(
                "https://gauravpanwar-portfolio.vercel.app/",
                "_blank"
              );
            }}
          >
            <div className="h-[145px] flex">
              <img src={portfolio} className="h-auto object-cover" />
            </div>
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
            className="flex flex-col mx-auto bg-[#212121] w-[300px] text-center overflow-hidden cursor-pointer h-[300px]"
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
