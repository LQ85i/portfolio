import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img_picture_tag from "../assets/images/project-picture-tag.png";
import img_memory_game from "../assets/images/project-memory-game.png";
import { Days_One } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "../styles/Projects.css";
import ScrollContainer from "react-indiana-drag-scroll";

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

const projectData = [
  {
    title: "Memory Card Game",
    imgSrc: img_memory_game,
    gitSrc: "",
  },
  {
    title: "Picture Tag: Rats",
    imgSrc: img_picture_tag,
    gitSrc: "",
  },
  {
    title: "Memory Card Game",
    imgSrc: img_memory_game,
    gitSrc: "",
  },
  {
    title: "Memory Card Game",
    imgSrc: img_memory_game,
    gitSrc: "",
  },
  {
    title: "Memory Card Game",
    imgSrc: img_memory_game,
    gitSrc: "",
  },
  {
    title: "Memory Card Game",
    imgSrc: img_memory_game,
    gitSrc: "",
  },
  {
    title: "Memory Card Game",
    imgSrc: img_memory_game,
    gitSrc: "",
  },
];

const Projects: React.FC = () => {
  const projectCount = projectData.length;
  const initializeArray = () => {
    return Array(projectCount).fill(0);
  };
  const initializeProjectIndexes = () => {
    // initialize projectIndexes as [0,1,2,...]
    // with carousel it can change like this [1,2,...,0]
    let arr = Array(projectCount).fill(0);
    for (let i = 0; i < projectCount; i++) {
      arr[i] = i;
    }
    return arr 
  }
  const [styleModifiers, setStyleModifiers] = useState(initializeArray);
  const [projectIndexes, setProjectIndexes] = useState(initializeProjectIndexes);
  const [centerCardIndex, setCenterCardIndex] = useState(0);

  const cardContainerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLElement>(null);



  useEffect(() => {
    let newIndexes, newIndex, oldIndex;
    if (scrollRef.current) {

      if (centerCardIndex - 1 <= 0) {
        //move rightmost card to left end
        newIndexes = [...projectIndexes];
        newIndex = 0;
        oldIndex = projectCount - 1;
        scrollRef.current.scrollLeft += 450;
      } else if (centerCardIndex + 1 >= projectCount - 1) {
        //move leftmost card to right end
        newIndexes = [...projectIndexes];
        newIndex = projectCount - 1;
        oldIndex = 0;
        scrollRef.current.scrollLeft -= 450;
      } else {
        return;
      }

      newIndexes.splice(newIndex, 0, newIndexes.splice(oldIndex, 1)[0]);
      setProjectIndexes(newIndexes);
      console.log(newIndexes);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerCardIndex]);

  const getStyleModifier = (index: number) => {
    if (cardContainerRef.current && scrollRef.current) {
      const rect =
        cardContainerRef.current.children[index].getBoundingClientRect();
      const centerX =
        -scrollRef.current.clientWidth / 2 +
        rect.right -
        (rect.right - rect.left) / 2;

      const maxDistance = scrollRef.current.clientWidth / 2;

      if (Math.abs(centerX) <= maxDistance) {
        const modifier = 1 - Math.abs(centerX / maxDistance);
        return modifier;
      }
    }
    return 0;
  };

  const getCenterCardIndex = () => {
    let minDistance = undefined;
    let index = undefined;
    for (let i = 0; i < projectCount; i++) {
      if (cardContainerRef.current && scrollRef.current) {
        const rect =
          cardContainerRef.current.children[i].getBoundingClientRect();
        const deltaXFromViewCenter =
          -scrollRef.current.clientWidth / 2 +
          rect.right -
          (rect.right - rect.left) / 2;

        if (minDistance === undefined) {
          minDistance = Math.abs(deltaXFromViewCenter);
          index = i;
        } else if (Math.abs(deltaXFromViewCenter) < minDistance) {
          minDistance = Math.abs(deltaXFromViewCenter);
          index = i;
        }
      }
    }
    if (index != undefined) {
      
      return index;
    }
  };

  const handleScroll = () => {
    if (scrollRef.current && cardContainerRef.current) {
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const scrollX = scrollRef.current.scrollLeft;
      const percentage = scrollX / maxScrollLeft;

      //handle swapping of edge cards here
      const index = getCenterCardIndex();
      if (index != undefined) {
        setCenterCardIndex(index);
      }

      let modifiers = Array(projectCount).fill(0);
      for (let i = 0; i < projectCount; i++) {
        modifiers[projectIndexes[i]] = getStyleModifier(i);
      }
      setStyleModifiers(modifiers);
    }
    return;
  };

  const getProjectCards = () => {
    let arr: React.ReactNode[] = [];

    for (let i = 0; i < projectCount; i++) {
      arr.push(
        <section
          className="flex justify-center gap-[30px] max-w-[300px]"
          style={{
            opacity: 0.1 + 0.9 * styleModifiers[projectIndexes[i]],
          }}
          key={i}
        >
          <div
            className="flex  flex-col items-center carousel-card pt-[34px]"
            style={{
              marginTop: 107 - 107 * styleModifiers[projectIndexes[i]] + "px",
              maxWidth: 298 + 196 * styleModifiers[projectIndexes[i]] + "px",
              maxHeight: 470 + 230 * styleModifiers[projectIndexes[i]] + "px",
              minWidth: 298 + 196 * styleModifiers[projectIndexes[i]] + "px",
              minHeight: 470 + 230 * styleModifiers[projectIndexes[i]] + "px",
            }}
          >
            <h2
              className={`${days_one.variable} font-days_one text-white text-center min-w-[384px]`}
              style={{
                fontSize: 20 + 10 * styleModifiers[projectIndexes[i]] + "px",
              }}
            >
              {projectData[projectIndexes[i]].title}
            </h2>
            <Image
              className="mt-[22px]"
              width={420}
              height={568}
              src={projectData[projectIndexes[i]].imgSrc}
              alt="Image of a project"
              style={{
                minWidth: 225 + 165 * styleModifiers[projectIndexes[i]] + "px",
                minHeight: 340 + 188 * styleModifiers[projectIndexes[i]] + "px",
              }}
            />
            <button
              className={`${dm_sans.variable} font-dm_sans min-w-[218px] text-white text-[25px] rounded-[5px] min-h-[43px] max-w-[218px] max-h-[43px] mt-[27px] carousel-button`}
              style={{
                opacity: 0 + 1 * styleModifiers[projectIndexes[i]],
              }}
            >
              Check it out!
            </button>
          </div>
        </section>
      );
    }

    return (
      <div
        className="flex justify-center scroll-container h-[700px] overflow-hidden gap-[153px] mt-[22px] px-[50px]"
        style={{
          width: projectCount * 400 + "px",
        }}
        ref={cardContainerRef}
      >
        {arr}
      </div>
    );
  };

  return (
    <>
      <div className="mt-[200px] w-[100vw]">
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
        <ScrollContainer
          vertical={false}
          horizontal={true}
          hideScrollbars={true}
          innerRef={scrollRef}
          nativeMobileScroll={true}
          onScroll={handleScroll}
        >
          {getProjectCards()}
        </ScrollContainer>
      </div>
    </>
  );
};

export default Projects;
