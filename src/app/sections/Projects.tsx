import React from "react";
import Image from "next/image";
import carousel_rats from "../assets/images/carousel-rats.png";
import { Days_One } from "next/font/google";
import { DM_Sans } from "next/font/google";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
});

const dm_sans = DM_Sans({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const Projects: React.FC = () => {
  return (
    <>
      <div className="mt-[200px] w-[600px] max-w-[600px]">
        <h1
          className={`${days_one.variable} font-days_one text-white text-[40px] text-center`}
        >
          Projects
        </h1>
        <h1
          className={`${days_one.variable} font-days_one text-white text-[15px] text-center`}
        >
          in The Odin Project
        </h1>
        <div className="flex gap-[33px] mt-[22px] justify-center overflow-visible">
          <div className="flex flex-col items-center min-w-[338px] min-h-[470px] max-w-[338px] max-h-[470px] mt-[107px] project-carousel-side opacity-[40%] pt-[34px]">
            <h1
              className={`${days_one.variable} font-days_one text-white text-[20px] text-center min-w-[384px]`}
            >
              Memory Card Game
            </h1>
          </div>
          <div className="flex flex-col items-center min-w-[548px] min-h-[700px] max-w-[338px] max-h-[700px] project-carousel-center pt-[22px]">
            <h1
              className={`${days_one.variable} font-days_one text-white text-[30px] text-center min-w-[384px]`}
            >
              Picture Tag: Rats
            </h1>
            <Image
              className="min-w-[390px] min-h-[528px] max-w-[390px] max-h-[528px] mt-[22px]"
              width={420}
              height={568}
              src={carousel_rats}
              alt="Image of a project"
            />
            <button
              className={`${dm_sans.variable} font-dm_sans min-w-[218px] text-white text-[25px] rounded-[5px] min-h-[43px] max-w-[218px] max-h-[43px] mt-[27px] carousel-button`}
            >
              Check it out!
            </button>
          </div>
          <div className="flex flex-col items-center min-w-[338px] min-h-[470px] max-w-[338px] max-h-[470px] mt-[107px] project-carousel-side opacity-[40%] pt-[34px]">
            <h1
              className={`${days_one.variable} font-days_one text-white text-[20px] text-center min-w-[384px]`}
            >
              Shopping Cart Demo
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
