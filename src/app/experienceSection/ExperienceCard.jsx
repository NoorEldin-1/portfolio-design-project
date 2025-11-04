"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import ex1Image from "../../../public/ex1.png";
import ex2Image from "../../../public/ex2.png";
import ex3Image from "../../../public/ex3.png";
import ex4Image from "../../../public/ex4.png";

const ExperienceCard = () => {
  const experienceCards = useMemo(() => {
    const cards = [
      {
        img: ex1Image,
        title: "CIB on the Mobile",
        info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      },
      {
        img: ex4Image,
        title: "CIB on the Mobile",
        info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      },
      {
        img: ex2Image,
        title: "CIB on the Mobile",
        info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      },
      {
        img: ex3Image,
        title: "CIB on the Mobile",
        info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      },
      {
        img: ex4Image,
        title: "CIB on the Mobile",
        info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      },
      {
        img: ex3Image,
        title: "CIB on the Mobile",
        info: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
      },
    ];
    return cards.map((e, i) => {
      return (
        <div
          key={i}
          className="bg-[#1A0B2E] w-[400px] rounded-md border-t-4 border-[#763CAC] flex p-2 gap-2 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-0 h-full bg-transparent card-effect"></div>
          <div className="grid place-content-center relative">
            <Image src={e.img} alt="ex1" width={100} height={100} />
          </div>
          <div className="flex-1 flex flex-col gap-2 relative">
            <p className="font-bold text-lg">{e.title}</p>
            <p className="text-xs opacity-75">{e.info}</p>
            <button className="border border-[#763CAC] px-5 py-1.5 text-sm rounded-xl w-fit font-bold cursor-pointer duration-300 hover:bg-[#763CAC]">
              Learn More
            </button>
          </div>
        </div>
      );
    });
  }, []);
  return experienceCards;
};

export default React.memo(ExperienceCard);
