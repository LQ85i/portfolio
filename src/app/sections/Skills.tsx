import React, { useRef } from "react";
import Image from "next/image";
import icon_star1 from "../assets/images/icon_star1.svg";
import icon_star2 from "../assets/images/icon_star2.svg";
import icon_arrow_left from "../assets/images/icon_arrow_left.svg";
import icon_arrow_right from "../assets/images/icon_arrow_right.svg";

import { Days_One } from "next/font/google";
import "../styles/Skills.css";

const days_one = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
});

const Skills: React.FC = () => {
  const skillTables = useRef<HTMLDivElement>(null);

  const skillStars: { [key: string]: number } = {
    HTML: 3.5,
    CSS: 3.5,
    JavaScript: 4,
    ReactJS: 3,
    TailwindCSS: 1.5,
    TypeScript: 1,
    NodeJS: 2.5,
    Express: 1.5,
    Firebase: 2,
    MongoDB: 3,
    SQL: 2.5,
    MySQL: 1.5,
    Figma: 1.5,
    Java: 3.5,
    C: 3.5,
    "C#": 3,
    "C++": 3,
    Python: 3.5,
    Git: 2.5,
    ChatGPT: 3,
  };

  const renderSkillStars = (skill: string) => {
    let arr: React.ReactNode[] = [];
    const stars = skillStars[skill];
    let length = Math.floor(stars);
    for (let i = 0; i < length; i++) {
      arr.push(
        <Image
          key={i}
          className="xs:min-w-[29px] xs:min-h-[29px] xs:max-w-[29px] xs:max-h-[29px] h-[20px] w-[20px]"
          width={29}
          height={29}
          src={icon_star1}
          alt="Star icon"
        />
      );
    }
    if (stars % 1 != 0) {
      arr.push(
        <div className="relative flex" key={5}>
          <div className="xs:min-w-[14.5px] xs:min-h-[29px] xs:max-w-[14.5px] xs:max-h-[29px] w-[10px] h-[20px] overflow-hidden">
            <Image
              className="xs:min-w-[29px] xs:min-h-[29px] xs:max-w-[29px] xs:max-h-[29px] min-w-[20px] min-h-[20px]"
              width={29}
              height={29}
              src={icon_star1}
              alt="Star icon half"
            />
          </div>
          <div className="xs:min-w-[14.5px] xs:min-h-[29px] xs:max-w-[14.5px] xs:max-h-[29px] w-[10px] h-[20px] overflow-hidden">
            <Image
              key={5}
              className="xs:ml-[-14.5px] ml-[-10px] xs:min-w-[29px] xs:min-h-[29px] xs:max-w-[29px] xs:max-h-[29px] min-w-[20px] min-h-[20px]"
              width={29}
              height={29}
              src={icon_star2}
              alt="Star icon"
            />
          </div>
        </div>
      );
    }
    if (arr.length < 5) {
      const starsMissing = 5 - arr.length;
      for (let i = 0; i < starsMissing; i++) {
        arr.push(
          <Image
            key={6 + i}
            className="xs:min-w-[29px] xs:min-h-[29px] xs:max-w-[29px] xs:max-h-[29px] h-[20px] w-[20px]"
            width={29}
            height={29}
            src={icon_star2}
            alt="Star icon"
          />
        );
      }
    }
    return <>{arr}</>;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget.classList.contains("arrow")) {
      if (e.currentTarget.children[0].classList.contains("arrow-right")) {
        if (skillTables.current && skillTables.current.parentNode) {
          const parent = skillTables.current.parentNode as HTMLElement;
          skillTables.current.scrollTo({
            top: 0,
            left: skillTables.current.scrollLeft + parent.offsetWidth,
            behavior: "smooth",
          });
        }
      } else if (e.currentTarget.children[0].classList.contains("arrow-left")) {
        if (skillTables.current && skillTables.current.parentNode) {
          const parent = skillTables.current.parentNode as HTMLElement;
          skillTables.current.scrollTo({
            top: 0,
            left: skillTables.current.scrollLeft - parent.offsetWidth,
            behavior: "smooth",
          });
        }
      }
    }
  };
  return (
    <>
      {" "}
      <div className="flex flex-col mt-[200px] bg-[#132790] bg-opacity-[50%] max-w-[1515px] w-[95vw] h-min max-h-[784px] rounded-[20px] border-[2px] border-[#524FFF] border-opacity-[50%] ">
        <h2
          className={`${days_one.variable} mt-[30px] font-days_one text-white text-[40px] text-center`}
        >
          Skills
        </h2>
        <div
          className="skill-tables flex mx-[5px] mt-[30px] justify-center overflow-auto gap-[20px]"
          ref={skillTables}
        >
          <section className="min-w-[306px] flex ">
            <div className="arrow min-w-[35px]  max-w-[100px]">
              <div className="arrow-left max-w-0"></div>
            </div>
            <table className="justify-center">
              <thead
                className={`${days_one.variable} font-days_one text-white text-[25px] text-left`}
              >
                <tr>
                  <td>Front-end</td>
                </tr>
              </thead>
              <tbody>
                <tr className="skill-table-row px-[10px] xxs:px[15px] border-[3px] border-[#5282FF] rounded-tl-[10px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    HTML
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("HTML")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    CSS
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("CSS")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    JavaScript
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("JavaScript")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    ReactJS
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("ReactJS")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    Tailwind CSS
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("TailwindCSS")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    TypeScript
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("TypeScript")}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="arrow items-center min-w-[35px] max-w-[100px] hover:cursor-pointer"
              onClick={handleClick}
            >
              <Image
                className="arrow-right xxs:min-w-[41px] xxs:min-h-[41px] xxs:max-w-[41px] xxs:max-h-[41px] min-w-[25px] min-h-[25px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrow_right}
                alt="Icon arrow right"
              />
            </div>
          </section>
          <section className="min-w-[306px]">
            <div
              className="arrow items-center min-w-[35px] max-w-[100px] hover:cursor-pointer"
              onClick={handleClick}
            >
              <Image
                className="arrow-left xxs:min-w-[41px] xxs:min-h-[41px] xxs:max-w-[41px] xxs:max-h-[41px] min-w-[25px] min-h-[25px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrow_left}
                alt="Icon arrow left"
              />
            </div>
            <table>
              <thead
                className={`${days_one.variable} font-days_one text-white text-[25px] text-left`}
              >
                <tr>
                  <td>Back-end</td>
                </tr>
              </thead>
              <tbody>
                <tr className="skill-table-row px-[10px] xxs:px[15px] border-[3px] border-[#5282FF] rounded-tl-[10px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]  ">
                    NodeJS
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("NodeJS")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    Express
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("Express")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    Firebase
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("Firebase")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    MongoDB
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("MongoDB")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    SQL
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("SQL")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    MySQL
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("MySQL")}
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              className="arrow items-center min-w-[35px] max-w-[100px] hover:cursor-pointer"
              onClick={handleClick}
            >
              <Image
                className="arrow-right xxs:min-w-[41px] xxs:min-h-[41px] xxs:max-w-[41px] xxs:max-h-[41px] min-w-[25px] min-h-[25px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrow_right}
                alt="Icon arrow right"
              />
            </div>
          </section>
          <section className="min-w-[306px]">
            <div
              className="arrow items-center min-w-[35px] max-w-[100px] hover:cursor-pointer"
              onClick={handleClick}
            >
              <Image
                className="arrow-left xxs:min-w-[41px] xxs:min-h-[41px] xxs:max-w-[41px] xxs:max-h-[41px] min-w-[25px] min-h-[25px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrow_left}
                alt="Icon arrow left"
              />
            </div>
            <table>
              <thead
                className={`${days_one.variable} font-days_one text-white text-[25px] text-left`}
              >
                <tr>
                  <td>Other</td>
                </tr>
              </thead>
              <tbody>
                <tr className="skill-table-row px-[10px] xxs:px[15px] border-[3px] border-[#5282FF] rounded-tl-[10px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]  ">
                    Figma
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("Figma")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    Java
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("Java")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    C
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("C")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    C#
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("C#")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    C++
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("C++")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    Python
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("Python")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    Git
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("Git")}
                  </td>
                </tr>
                <tr className="skill-table-row px-[10px] xxs:px[15px]">
                  <td className="skill-table-div text-[12px] xxs:text-[14px] xs:text-[20px] xxs:min-w-[120px] xs:min-w-[153px] min-w-[80px]">
                    ChatGPT
                  </td>
                  <td className="flex gap-[5px] px-[5px] h-full items-center border-l-[3px] border-[#5282FF] min-w-[125px]">
                    {renderSkillStars("ChatGPT")}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="arrow min-w-[35px] max-w-[100px]">
              <div className="arrow-right max-w-0"></div>
            </div>
          </section>
        </div>
        <p className="mt-[40px] mb-[20px] px-[10px] text-white text-[12px] xxs:text-[14px] lg:text-[18px] md:text-[14px] text-center ">
          Measured with ChatGPT prompts:
          <br />
          &quot;Summarize all of X knowledge into 5 levels of skill, from
          beginner to expert&quot;
        </p>
      </div>
    </>
  );
};

export default Skills;
