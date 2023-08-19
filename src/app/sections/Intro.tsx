import React from "react";
import Image from "next/image";
import profilepic from "../assets/images/profilepic-july.png";
import { Days_One } from "next/font/google";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
});

const Intro: React.FC = () => {
  return (
    <>
      <div className="max-w-[823px]">
        <div className="flex">
          <div className="min-w-[199px] min-h-[227px] max-w-[199px] max-h-[227px] profile-pic-background flex items-center justify-center">
            <Image
              className="rounded-[10px] max-h-[209px] max-w-[186px]"
              height={209}
              width={186}
              src={profilepic}
              alt="Picture of the author"
            />
          </div>

          <p className="text-white ml-[81px] text-[25px] max-w-[438px] min-w-[350px]">
            Hi!
            <br />
            <br />
            I&apos;m Jaakko,
            <br />
            <br />a Front-end Developer and this is my portfolio website
          </p>
        </div>
        <div className="flex flex-col">
          <h1
            className={`${days_one.variable} font-days_one text-[#7DBCD7] text-[30px] mt-[86px]`}
          >
            Main skills:
          </h1>
          <div className="text-white text-[30px] flex items-center justify-between gap-[33px]">
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
