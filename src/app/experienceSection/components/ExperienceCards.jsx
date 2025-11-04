"use client";

import React, { useMemo } from "react";
import ex1Image from "../../../../public/ex1.png";
import ex2Image from "../../../../public/ex2.png";
import ex3Image from "../../../../public/ex3.png";
import ex4Image from "../../../../public/ex4.png";
import Card from "./Card";

const ExperienceCards = () => {
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
      return <Card key={i} image={e.img} title={e.title} info={e.info} />;
    });
  }, []);
  return experienceCards;
};

export default React.memo(ExperienceCards);
