import React from "react";
import { DM_Sans } from "next/font/google";
import "../styles/Footer.css";

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
          <span>Back-end built with Express and hosted on Fly.io.
          Emails handled using react-email with nodemailer.</span>
          <br />
          <a className="underline" href="https://github.com/LQ85i/portfolio">See source code here</a>
          <br />
          <span className="text-[12px]">Website by <a className="underline" href="https://github.com/LQ85i">LQ85i</a>. Last updated Aug 2024.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
