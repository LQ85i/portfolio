import React from "react";
import Image from "next/image";
import profilepic from "../assets/images/profilepic-july.png";
import { Days_One } from "next/font/google";
import "../styles/Intro.css"

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
});

const Intro: React.FC = () => {
  return (
    <>
      <div className="max-w-[823px] w-[95vw]">
        <div className="flex xs:flex-nowrap xs:justify-left flex-wrap">
          <div className="max-w-[199px] xs:mx-0 mx-auto max-h-[227px] profile-pic-background flex items-center justify-center">
            <Image
              className="rounded-[10px] max-h-[209px] w-[90%]"
              height={209}
              width={186}
              src={profilepic}
              alt="Picture of the author"
            />
          </div>
          <p className="text-white xs:mt-0 mt-5 ml-[3vw] text-[25px] max-w-[438px]">
            Hi!
            <br />
            <br />
            I&apos;m Jaakko,
            <br />
            <br />a Front-end Developer and this is my portfolio website
          </p>
        </div>
        <div className="flex flex-col">
          <h2
            className={`${days_one.variable} font-days_one text-[#7DBCD7] text-[30px] xss:mt-[86px] xs:mt-[56px] mt-[20px] self-center`}
          >
            Main skills:
          </h2>
          <div className="text-white text-[30px] flex flex-wrap items-center justify-center lg:gap-[33px] sm:gap-[25px] xs:gap-[20px] xxs:gap-[15px] gap-[10px] sm:mt-[20px] mt-[10px]">
            <div className="main-skill-background px-[29px] py-[6px]">HTML</div>
            <div className="main-skill-background px-[29px] py-[6px]">CSS</div>
            <div className="main-skill-background px-[29px] py-[6px]">
              JavaScript
            </div>
            <div className="main-skill-background px-[29px] py-[6px]">
              ReactJS
            </div>
          </div>
        </div>
        <p className="text-white mt-[120px] text-[30px] text-center ">
          Previously automation engineering student, learned Front-end through
          The Odin Project and continuing the course for more Back-end.
        </p>
      </div>
    </>
  );
};

export default Intro;
