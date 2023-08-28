import React, { useEffect, useState } from "react";
import Image from "next/image";
import img_picture_tag from "../assets/images/project-picture-tag.png";
import img_memory_game from "../assets/images/project-memory-game.png";
import img_shopping_cart from "../assets/images/project-shopping-cart.png";
import img_battleships from "../assets/images/project-battleships.png";
import icon_arrow_left from "../assets/images/icon_arrow_left.svg";
import icon_arrow_right from "../assets/images/icon_arrow_right.svg";
import icon_circle from "../assets/images/icon_circle.svg";
import icon_circle_filled from "../assets/images/icon_circle_filled.svg";
import { Days_One } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "../styles/Projects.css";
import { useSpring, animated } from "react-spring";

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
  const projectData = [
    {
      title: "Picture Tag: Rats",
      description: (
        <div>
          Includes:
          <ul className="list-disc ml-[20px]">
            <li>in-app instructions</li>
            <li>responsive design with mobile support</li>
            <li>online leaderboard</li>
            <li>full game-loop with randomized characters</li>
            <li>back-end data validation</li>
            <li>animations</li>
          </ul>
        </div>
      ),
      imgSrc: img_picture_tag,
      gitSrc: "https://github.com/LQ85i/firebase-project-2",
      deploySrc: "https://lq85i.github.io/firebase-project-2",
    },
    {
      title: "Shopping Cart Demo",
      description: (
        <div>
          Includes:
          <ul className="list-disc ml-[20px]">
            <li>in-app instructions</li>
            <li>responsive design with mobile support</li>
            <li>online leaderboard</li>
            <li>full game-loop with randomized characters</li>
            <li>back-end data validation</li>
            <li>animations</li>
          </ul>
        </div>
      ),
      imgSrc: img_shopping_cart,
      gitSrc: "https://github.com/LQ85i/react-project-7",
      deploySrc: "https://lq85i.github.io/react-project-7/",
    },
    {
      title: "Memory Card Game",
      description: (
        <div>
          Includes:
          <ul className="list-disc ml-[20px]">
            <li>in-app instructions</li>
            <li>responsive design with mobile support</li>
            <li>online leaderboard</li>
            <li>full game-loop with randomized characters</li>
            <li>back-end data validation</li>
            <li>animations</li>
          </ul>
        </div>
      ),
      imgSrc: img_memory_game,
      gitSrc: "https://github.com/LQ85i/react-project-4",
      deploySrc: "https://lq85i.github.io/react-project-4/",
    },
    {
      title: "Battleships Game",
      description: (
        <div>
          Includes:
          <ul className="list-disc ml-[20px]">
            <li>in-app instructions</li>
            <li>responsive design with mobile support</li>
            <li>online leaderboard</li>
            <li>full game-loop with randomized characters</li>
            <li>back-end data validation</li>
            <li>animations</li>
          </ul>
        </div>
      ),
      imgSrc: img_battleships,
      gitSrc: "",
      deploySrc: "",
    },
    {
      title: "Memory Card Game",
      description: (
        <div>
          Includes:
          <ul className="list-disc ml-[20px]">
            <li>in-app instructions</li>
            <li>responsive design with mobile support</li>
            <li>online leaderboard</li>
            <li>full game-loop with randomized characters</li>
            <li>back-end data validation</li>
            <li>animations</li>
          </ul>
        </div>
      ),
      imgSrc: img_memory_game,
      gitSrc: "",
      deploySrc: "",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(1);
  const [holdSlide, setHoldSlide] = useState(-1);
  const [slideIsFading, setSlideIsFading] = useState(false);

  const [touchStartX, setTouchStartX] = useState(Number);
  const [touchStartY, setTouchStartY] = useState(Number);

  const projectCount = projectData.length;

  const fadeProps = useSpring({
    opacity: slideIsFading ? 0 : 1,
    config: { duration: 200 },
    onRest: () => {
      // Toggle the animation direction when it's finished
      // creates fade out, fade in effect
      if (holdSlide != -1) {
        setSlideIsFading(!slideIsFading);
      }
    },
  });

  useEffect(() => {
    // this avoids bug where slideIsFading gets stuck on true
    if (slideIsFading) {
      const timeoutId = setTimeout(() => {
        setSlideIsFading(false);
      }, 400);
      return () => clearTimeout(timeoutId);
    }
  }, [slideIsFading]);

  useEffect(() => {
    // this keeps previous slide in view until fade out is complete
    if (holdSlide !== -1) {
      const timeoutId = setTimeout(() => {
        setHoldSlide(-1);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [holdSlide]);

  const getSlide = () => {
    let slideIndex;
    if (holdSlide != -1) {
      slideIndex = holdSlide - 1;
    } else {
      slideIndex = activeSlide - 1;
    }
    return (
      <animated.div
        className="flex w-[90%] flex-col md:flex-row md:justify-center justify-start"
        style={fadeProps}
      >
        <div className="min-w-[40%] md:w-auto max-w-[362px] mx-auto min-h-[350px] max-h-[350px] md:min-h-[493px] md:max-h-[493px] flex md:items-center">
          <Image
            className="h-full w-auto md:max-w-[362px] mx-auto md:h-auto md:w-full md:max-h-[493px] md:my-auto"
            width={362}
            height={493}
            src={projectData[slideIndex].imgSrc}
            alt="Picture of a project"
          />
        </div>
        <div className="min-w-[60%] md:pl-[50px] flex flex-col">
          <h2
            className={`${days_one.variable} md:text-start text-center font-days_one md:text-[25px] text-[18px] md:mt-0 mt-[20px]`}
          >
            {projectData[slideIndex].title}
          </h2>
          <div className="min-h-[300px] md:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] md:mt-[30px] mt-[20px] mb-[30px] xxs:ml-[5%] md:ml-0">
            {projectData[slideIndex].description}
          </div>
          <div className="mt-auto">
            <div className="flex flex-wrap xs:flex-nowrap gap-x-[25px] gap-y-[20px] justify-center md:justify-start mb-2px h-min">
              <a href={projectData[slideIndex].deploySrc}>
                <button
                  className={`${dm_sans.variable} font-dm_sans w-max text-[16px] h-[50px] px-[20px]  rounded-[10px] border-[#00C2FF] border-[1px] project-button`}
                >
                  Deployed Here
                </button>
              </a>
              <a href={projectData[slideIndex].gitSrc}>
                <button
                  className={`${dm_sans.variable} font-dm_sans w-max text-[16px] h-[50px] px-[20px]  rounded-[10px] border-[#00C2FF] border-[1px] project-button`}
                >
                  GitHub Repository
                </button>
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    );
  };

  const getSlideDots = () => {
    let arr = [];
    for (let i = 0; i < projectCount; i++) {
      arr.push(
        <div
          className="flex justify-center hover:cursor-pointer change-slide-circle items-center min-w-[50px] min-h-[30px] max-w-[50px] max-h-[30px]"
          key={i}
          data-key={i}
          onClick={handleClick}
        >
          <Image
            className="max-w-[20px] max-h-[20px] min-h-[20px] min-w-[20px]"
            width={48}
            height={48}
            src={i + 1 === activeSlide ? icon_circle_filled : icon_circle}
            alt="Icon circle"
          />
        </div>
      );
    }
    return arr;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (slideIsFading) {
      // prevents spam clicking, keeps animation intact
      return;
    }
    const element = e.currentTarget;
    if (element.classList.contains("change-slide-arrow-left")) {
      slideLeft();
    } else if (element.classList.contains("change-slide-arrow-right")) {
      slideRight();
    } else if (element.classList.contains("change-slide-circle")) {
      const key = element.getAttribute("data-key");
      if (key != null) {
        const index = parseInt(key) + 1;
        if (index != activeSlide) {
          setActiveSlide(index);
          setSlideIsFading(true);
          setHoldSlide(activeSlide);
        }
      }
    }
  };

  const slideLeft = () => {
    let index;
    if (activeSlide === 1) {
      index = projectCount;
    } else {
      index = activeSlide - 1;
    }
    setActiveSlide(index);
    setSlideIsFading(true);
    setHoldSlide(activeSlide);
  };

  const slideRight = () => {
    let index;
    if (activeSlide === projectCount) {
      index = 1;
    } else {
      index = activeSlide + 1;
    }
    setActiveSlide(index);
    setSlideIsFading(true);
    setHoldSlide(activeSlide);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const swipeDistanceX = touchEndX - touchStartX;
    const swipeDistanceY = touchEndY - touchStartY;
    const swipeThreshold = 50;

    if(Math.abs(swipeDistanceY) > swipeThreshold) {
      // Prevents slide changes on vertical swiping
      return;
    }
    if (swipeDistanceX > swipeThreshold) {
      slideRight();
    } else if (swipeDistanceX < -swipeThreshold) {
      slideLeft();
    }
  };

  return (
    <>
      <div className="mt-[200px] max-w-[1515px] w-[100vw] flex flex-col items-center text-white">
        <h2
          className={`${days_one.variable} font-days_one text-white text-[40px] text-center`}
        >
          Projects
        </h2>
        <h2
          className={`${days_one.variable} font-days_one text-white text-[15px] text-center`}
        >
          in The Odin Project
        </h2>

        <div
          className="max-w-[1514px] w-[95vw] h-max mt-[50px] bg-[#0085FF] bg-opacity-[22%] rounded-[10px] border-[1px] border-[#0085FF] pt-[50px] pb-[20px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-between ">
            <div
              className="change-slide-arrow-left hover:cursor-pointer flex items-center justify-start min-w-[35px] w-[5%] max-w-[100px]"
              onClick={handleClick}
            >
              <Image
                className="icon-filter-bw"
                width={48}
                height={48}
                src={icon_arrow_left}
                alt="Icon arrow left"
              />
            </div>
            {getSlide()}
            <div
              className="change-slide-arrow-right hover:cursor-pointer flex items-center justify-end min-w-[35px] w-[5%] max-w-[100px]"
              onClick={handleClick}
            >
              <Image
                className="icon-filter-bw"
                width={48}
                height={48}
                src={icon_arrow_right}
                alt="Icon arrow right"
              />
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <div className="flex ">{getSlideDots()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
