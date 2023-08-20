import React from "react";
import { Days_One } from "next/font/google";
import { DM_Sans } from "next/font/google";
import axios, { AxiosResponse } from "axios";

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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const jsonObject = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };
    try {
      const response: AxiosResponse = await axios.post(
        "https://portfolio-server15389.fly.dev/send-email",
        jsonObject
      );
      
      // Handle success
    } catch (error) {
      console.log(error);
      
      // Handle error
    }
  };

  return (
    <>
      <div className="mt-[200px] flex flex-col items-center">
        <h1
          className={`${days_one.variable} font-days_one text-white text-[40px] text-center`}
        >
          Contact
        </h1>
        <p
          className={`text-white mt-[82px] ${dm_sans.variable} font-dm_sans xs:text-[30px] text-[25px] text-center `}
        >
          I am currently available for work.
        </p>
        <div
          className={`${dm_sans.variable} font-dm_sans flex flex-col items-center mt-[90px] max-w-[950px] w-[95vw] h-[812px] rounded-tl-[50px] rounded-tr-[50px] contact-form-background`}
        >
          <h1 className={"xs:text-[30px] text-[25px] font-bold mt-[30px]  text-white"}>
            Send me a message:
          </h1>
          <form
            className="flex flex-col items-center text-white text-[25px]"
            action=""
            onSubmit={handleSubmit}
          >
            <label className="mt-[30px]" htmlFor="name">
              Name <br />
              <input
                className="bg-[#000000] bg-opacity-[8%] rounded-[5px] border-[1px] border-[#00C2FF] max-w-[700px] w-[70vw] min-w-[200px]"
                name="name"
                type="text"
                maxLength={50}
                required
              />
            </label>
            <label className="mt-[30px]" htmlFor="email">
              Email <br />
              <input
                className="bg-[#000000] bg-opacity-[8%] rounded-[5px] border-[1px] border-[#00C2FF] max-w-[700px] w-[70vw] min-w-[200px]"
                name="email"
                type="email"
                maxLength={50}
                required
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
                required
              ></textarea>
            </label>
            <input
              className="w-[170px] h-[50px] mt-[35px] rounded-[10px] border-[#00C2FF] border-[1px] contact-form-send"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
