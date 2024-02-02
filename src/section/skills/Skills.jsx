import React from "react";
import { skillsData } from "./skillsData";

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-10 md:py-10 md:px-20 bg-[#212121]">
      <h1 className="text-[38px] font-bold text-center">My Skills</h1>
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-10 mt-10 max-w-[1024px] mx-auto">
        {skillsData?.map((item, index) => {
          return (
            <div className="grid gap-4 min-w-[150px] md:w-[200px] text-center justify-center border-2 rounded-[8px] border-[#F3F3F3] p-4 hover:bg-[#FAB84D70] hover:border-[#FAB84D]">
              {/* <img src={item.iconUrl} width={80} /> */}
              <p className="text-[18px] font-semibold">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
