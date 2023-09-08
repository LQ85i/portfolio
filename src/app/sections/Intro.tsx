import React from "react";
import Image from "next/image";
import profilepic from "../assets/images/profilepic-july.png";
import { Days_One } from "next/font/google";
import "../styles/Intro.css";

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
          <div className="min-w-[205px] min-h-[230px] max-w-[205px] max-h-[230px] rounded-[20px] xs:mx-0 mx-auto profile-pic-background flex items-center justify-center">
            <Image
              className="rounded-[10px] max-h-[209px] w-[90%]"
              height={209}
              width={186}
              src={profilepic}
              alt="Picture of the author"
            />
          </div>
          <div className="xs:mx-auto ml-[3vw] xs:mt-0 mt-5 rounded-[20px] profile-text-background max-w-[438px] flex items-center justify-center px-[10px] py-[10px]">
            <p className="text-white p-[10px] rounded-[10px] bg-[#000A1D] xs:text-left text-center text-[25px] leading-tight">
              Hi!
              <br />
              <br />
              I&apos;m Jaakko,
              <br />
              <br /> a Full Stack Developer and this is my portfolio website.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2
            className={`${days_one.variable} font-days_one text-[#7DBCD7] text-[30px] xss:mt-[86px] xs:mt-[56px] mt-[20px] self-center`}
          >
            Main skills:
          </h2>
          <div className="text-white text-[30px] flex flex-wrap justify-center lg:gap-[33px] sm:gap-[25px] xs:gap-[20px] xxs:gap-[15px] gap-[10px] sm:mt-[20px] mt-[10px]">
            <div className="main-skill-background px-[29px] py-[6px]">HTML</div>
            <div className="main-skill-background px-[29px] py-[6px]">CSS</div>
            <div className="main-skill-background px-[29px] py-[6px]">
              JavaScript
            </div>
            <div className="main-skill-background px-[29px] py-[6px]">
              ReactJS
            </div>
            <div className="main-skill-background px-[29px] py-[6px]">
              NodeJS
            </div>
          </div>
        </div>
        <div className="xs:mx-auto ml-[3vw] rounded-[20px] mt-[60px]  profile-text-background flex items-center justify-center px-[10px] py-[10px]">
          <p className="text-white p-[10px] rounded-[10px] bg-[#000A1D] xs:text-[20px] sm:text-[24px] text-[18px] text-center">
            Previously automation engineering student, learned web development
            through The Odin Project. <br />
            <br />
            I don&apos;t have professional experience yet, but I hope this
            portfolio together with my other projects shows my potential for
            growth.
            <br />
            <br />
            I&apos;m more front-end focused but can handle the basics of
            back-end. My strengths are innovation, perception and perseverance.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
