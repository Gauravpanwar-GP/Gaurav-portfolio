import React from "react";

const Projects = () => {
  return (
    <React.Fragment>
      <div id="projects" className="px-4 py-10 md:py-10 md:px-20 bg-[#212121]">
        <h1 className="text-[38px] font-bold text-center">Projects</h1>
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-10 mt-10 max-w-[1024px] mx-auto">
          <div className="grid gap-4 w-[200px] md:w-[300px] text-center justify-center border-2 rounded-[8px] border-[#F3F3F3] p-4">
            <p className="text-[18px] font-semibold">Flipkart Clone</p>
          </div>
          <div className="grid gap-4 w-[200px] md:w-[300px] text-center justify-center border-2 rounded-[8px] border-[#F3F3F3] p-4">
            <p className="text-[18px] font-semibold">Portfolio</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-medium text-center my-4">
            I am presently designing my new Portfolio UI. In the meantime, feel
            free to explore my previous portfolio if you're interested.
          </p>
          <div
            className="grid gap-4 mx-auto w-[200px] md:w-[300px] text-center justify-center border-2 rounded-[8px] border-[#F3F3F3] p-4 cursor-pointer"
            onClick={() => {
              window.open("https://gauravpanwar.vercel.app/", "_blank");
            }}
          >
            <p className="text-[18px] font-semibold">Old Portfolio</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
