import React, { useRef } from "react";
import Image from "next/image";
import icon_star1 from "../assets/images/icon_star1.svg";
import icon_star2 from "../assets/images/icon_star2.svg";
import icon_arrows_right from "../assets/images/icon_arrows_right.svg";
import icon_arrows_left from "../assets/images/icon_arrows_left.svg";
import { Days_One } from "next/font/google";

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
    TailwindCSS: 1,
    TypeScript: 1,
    NodeJS: 2.5,
    Express: 1.5,
    Firebase: 2,
    MongoDB: 3,
    SQL: 2.5,
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
          className="min-w-[29px] min-h-[29px] max-w-[29px] max-h-[29px]"
          width={29}
          height={29}
          src={icon_star1}
          alt="Star icon"
        />
      );
    }
    if (stars % 1 != 0) {
      arr.push(
        <div className="relative" key={5}>
          <Image
            className="min-w-[29px] min-h-[29px] max-w-[29px] max-h-[29px]"
            width={29}
            height={29}
            src={icon_star1}
            alt="Star icon half"
          />
          <div className="h-[31px] w-[15px] absolute left-[14px] top-[0px] bg-[#0D347A] bg-opacity-[90%]"></div>
        </div>
      );
    }
    if (arr.length < 5) {
      const starsMissing = 5 - arr.length;
      for (let i = 0; i < starsMissing; i++) {
        arr.push(
          <Image
            key={6 + i}
            className="min-w-[29px] min-h-[29px] max-w-[29px] max-h-[29px]"
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
    if (e.currentTarget.className === "arrows") {
      if (e.currentTarget.children[0].classList.contains("arrows-right")) {
        if (skillTables.current && skillTables.current.parentNode) {
          const parent = skillTables.current.parentNode as HTMLElement;
          skillTables.current.scrollTo({
            top: 0,
            left: skillTables.current.scrollLeft + parent.offsetWidth,
            behavior: "smooth",
          });
        }
      } else if (
        e.currentTarget.children[0].classList.contains("arrows-left")
      ) {
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
      <div className="mt-[200px] bg-[#132790] bg-opacity-[50%] max-w-[1515px] w-[95vw] min-h-[784px] max-h-[784px] rounded-[20px] border-[2px] border-[#524FFF] border-opacity-[50%]">
        <h1
          className={`${days_one.variable} mt-[30px] font-days_one text-white text-[40px] text-center`}
        >
          Skills
        </h1>
        <p className="text-white text-[18px] text-center ">
          All skill levels measured with ChatGPT prompts:
          <br />
          &quot;Summarize all of X knowledge into 5 levels of skill, from
          beginner to expert&quot;
        </p>
        <div
          className="skill-tables flex xl:mx-[93px] lg:mx-[63px] md:mx-[33px] mt-[30px] justify-between overflow-auto md:gap-[50px]"
          ref={skillTables}
        >
          <section className="min-w-[396px]">
            <div className="arrows">
              <div className="arrows-left"></div>
            </div>
            <div>
              <h1
                className={`${days_one.variable} font-days_one text-white text-[25px] text-left`}
              >
                Front-end
              </h1>
              <div className="flex flex-col relative">
                <div className="flex border-[3px] border-[#5282FF] rounded-tl-[10px] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    HTML
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("HTML")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[65px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px] border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    CSS
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("CSS")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    JavaScript
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("JavaScript")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    ReactJS
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("ReactJS")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Tailwind CSS
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("TailwindCSS")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    TypeScript
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("TypeScript")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
            </div>
            <div className="arrows" onClick={handleClick}>
              <Image
                className="arrows-right min-w-[41px] min-h-[41px] max-w-[41px] max-h-[41px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrows_right}
                alt="Icon arrows right"
              />
            </div>
          </section>
          <section className="min-w-[396px]">
            <div className="arrows" onClick={handleClick}>
              <Image
                className="arrows-left min-w-[41px] min-h-[41px] max-w-[41px] max-h-[41px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrows_left}
                alt="Icon arrows left"
              />
            </div>
            <div>
              <h1
                className={`${days_one.variable} font-days_one text-white text-[25px] text-left`}
              >
                Back-end
              </h1>
              <div className="flex flex-col relative">
                <div className="flex border-[3px] border-[#5282FF] rounded-tl-[10px] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    NodeJS
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("NodeJS")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[65px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px] border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Express
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("Express")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Firebase
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("Firebase")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    MongoDB
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("MongoDB")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    SQL
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("SQL")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
            </div>

            <div className="arrows" onClick={handleClick}>
              <Image
                className="arrows-right min-w-[41px] min-h-[41px] max-w-[41px] max-h-[41px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrows_right}
                alt="Icon arrows right"
              />
            </div>
          </section>
          <section className="min-w-[396px]">
            <div className="arrows" onClick={handleClick}>
              <Image
                className="arrows-left min-w-[41px] min-h-[41px] max-w-[41px] max-h-[41px] icon-filter-bw"
                width={41}
                height={41}
                src={icon_arrows_left}
                alt="Icon arrows left"
              />
            </div>
            <div>
              <h1
                className={`${days_one.variable} font-days_one text-white text-[25px] text-left`}
              >
                Other
              </h1>
              <div className="flex flex-col relative">
                <div className="flex border-[3px] border-[#5282FF] rounded-tl-[10px] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Figma
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("Figma")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[65px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px] border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Java
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("Java")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    C
                  </div>
                  <div className="flex gap-[5px]">{renderSkillStars("C")}</div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    C#
                  </div>
                  <div className="flex gap-[5px]">{renderSkillStars("C#")}</div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    C++
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("C++")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Python
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("Python")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    Git
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("Git")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
              <div className="flex flex-col relative">
                <div className="flex border-l-[3px] border-r-[3px] border-b-[3px]  border-[#5282FF] p-[15px]">
                  <div className="text-white text-[20px] font-bold min-w-[193px]">
                    ChatGPT
                  </div>
                  <div className="flex gap-[5px]">
                    {renderSkillStars("ChatGPT")}
                  </div>
                </div>
                <div className="absolute border-l-[3px] h-[60px] border-[#5282FF] left-[190px]"></div>
              </div>
            </div>

            <div className="arrows">
              <div className="arrows-right"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skills;
