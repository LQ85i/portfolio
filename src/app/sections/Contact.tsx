import React from "react";
import { Days_One } from "next/font/google";
import { DM_Sans } from "next/font/google";

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

const Contact: React.FC = () => {

const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
    return 
  }
  return (
    <>
      <div className="mt-[200px] flex flex-col items-center">
        <h1
          className={`${days_one.variable} font-days_one text-white text-[40px] text-center`}
        >
          Contact
        </h1>
        <p
          className={`text-white mt-[82px] ${dm_sans.variable} font-dm_sans text-[30px] text-center `}
        >
          I am currently available for work.
        </p>
        <div
          className={`${dm_sans.variable} font-dm_sans flex flex-col items-center mt-[90px] max-w-[950px] w-[95vw] h-[812px] rounded-tl-[50px] rounded-tr-[50px] contact-form-background`}
        >
          <h1 className={"text-[30px] font-bold mt-[30px]  text-white"}>
            Send me a message:
          </h1>
          <form
            className="flex flex-col items-center text-white text-[25px]"
            action=""
          >
            <label className="mt-[30px]" htmlFor="name">
              Name <br />
              <input
                className="bg-[#000000] bg-opacity-[8%] rounded-[5px] border-[1px] border-[#00C2FF] max-w-[700px] w-[70vw] min-w-[200px]"
                name="name"
                type="text"
                maxLength={50}
              />
            </label>
            <label className="mt-[30px]" htmlFor="email">
              Email <br />
              <input
                className="bg-[#000000] bg-opacity-[8%] rounded-[5px] border-[1px] border-[#00C2FF] max-w-[700px] w-[70vw] min-w-[200px]"
                name="email"
                type="email"
                maxLength={50}
              />
            </label>
            <label className="mt-[30px]" htmlFor="message">
              Message <br />
              <textarea
                className="bg-[#000000] bg-opacity-[8%] rounded-[5px] border-[1px] border-[#00C2FF] max-w-[700px] w-[70vw] min-w-[200px]"
                name="message"
                id=""
                cols={30}
                rows={10}
                maxLength={10000}
              ></textarea>
            </label>
            <button
              className="w-[170px] h-[50px] mt-[35px] rounded-[10px] border-[#00C2FF] border-[1px] contact-form-send"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
