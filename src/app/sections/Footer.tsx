import React from "react";
import { DM_Sans } from "next/font/google";
import { Days_One } from "next/font/google";
import "../styles/Footer.css";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
});

const dm_sans = DM_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex justify-center xs:text-[16px] text-[14px] text-center mt-[100px] mb-0 text-[#00F0FF] w-full px-[20px] pb-[20px] py-[40px]">
        <div className={`${dm_sans.variable} footer-content font-inter font-[400] `}>
          {"Front-end built with NextJS, TypeScript and Tailwind CSS."}
          <br />
          Back-end built with Express and hosted on Fly.io.
          Emails handled using react-email.
        </div>
      </div>
    </>
  );
};

export default Footer;
