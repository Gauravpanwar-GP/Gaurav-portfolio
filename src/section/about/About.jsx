import React from "react";

const About = () => {
  return (
    <section id="about" className="px-4 py-20 md:p-20 bg-[#3d3e42] min-h-screen">
      <h1 className="text-[38px] font-bold">About</h1>
      <p className="about">
        I specialize in crafting websites as a Frontend Web Developer,
        <span className="text-[#FAB84D]">
          {" "}
          passionately dedicated to shaping User Experience (UX) and Interface
          (UI)
        </span>
        . Explore my portfolio in the Projects section to see some of my notable
        creations. I find inspiration in collaborative work, often accompanied
        by music, which enhances my creative flow. I am actively seeking job
        opportunities where I can contribute, learn, and expand my skills. If
        you have an exciting opportunity aligning with my expertise and
        experience,
        <span className="text-[#FAB84D]">
          {" "}
          feel free to reach out—I'm ready for new challenges.
        </span>
      </p>
      <p className="about mt-4">
        What I Can Do For You,{" "}
        <span className="text-[#FAB84D] font-semibold">
          Build a responsive website,
        </span>{" "}
        I specialize in crafting responsive websites and web applications to
        meet your needs. My expertise includes a strong passion for UI/UX
        design, along with proficiency in HTML, CSS, JavaScript, React JS,
        Bootstrap, Tailwind, and MUI.
      </p>
    </section>
  );
};

export default About;
