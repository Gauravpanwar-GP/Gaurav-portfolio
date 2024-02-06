import { GithubIcon, Instagram, LinkedinIcon, Send } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <section
        id="contact"
        className="px-4 py-20 md:p-20 bg-[#212121] overflow-hidden"
      >
        <h1 className="text-[28px] md:text-[38px] font-bold text-center connect-border">
          Let's Connect
        </h1>
        <div>
          <div className="flex justify-center mt-10">
            <ul className="flex gap-20 items-center">
              <li
                className="hover:bg-[#FAB84D] bg-white mix-blend-difference p-2 rounded-full relative group cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/Gauravpanwar-GP", "_blank");
                }}
              >
                <GithubIcon className="text-[#212121] group-hover:text-[#FFFFFF]" />
                <p className="hidden group-hover:block bg-[#595959] text-white absolute top-[50%] px-2 py-1 text-[12px] rounded-[8px] -translate-y-[50%] right-[50px]">
                  GitHub
                </p>
              </li>
              <li
                className="hover:bg-[#FAB84D] bg-white p-2 rounded-full relative group cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/gaurav-panwar-79b49623a/",
                    "_blank"
                  );
                }}
              >
                <LinkedinIcon className="text-[#212121] group-hover:text-[#FFFFFF]" />
                <p className="hidden group-hover:block bg-[#595959] text-white absolute top-[50%] px-2 py-1 text-[12px] rounded-[8px] -translate-y-[50%] right-[50px]">
                  LinkedIn
                </p>
              </li>
              <li
                className="hover:bg-[#FAB84D] bg-white p-2 rounded-full relative group cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/gauravpanwar694/",
                    "_blank"
                  );
                }}
              >
                <Instagram className="text-[#212121] group-hover:text-[#FFFFFF]" />
                <p className="hidden group-hover:block bg-[#595959] text-white w-auto absolute top-[50%] px-2 py-1 text-[12px] rounded-[8px] -translate-y-[50%] right-[50px]">
                  Instagram
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <a href="mailto:gauravpanwar694@gmail.com">
              <button className="border-2 hover:shadow-[inset_400px_0px_0px_#FAB84D] hover:text-[#212121] transition-all ease-in-out duration-1000 border-[#FAB84D] text-[#FAB84D] rounded-[10px] py-4 px-4 font-semibold mt-6 flex items-center gap-4">
                <Send />
                gauravpanwar694@gmail.com
              </button>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
