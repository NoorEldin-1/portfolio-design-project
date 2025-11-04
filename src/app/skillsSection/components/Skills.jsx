"use client";

import Image from "next/image";
import React from "react";
import skillsImg from "../../../../public/skills.png";

const Skills = () => {
  return (
    <div
      id="lap"
      className="my-36 container mx-auto px-4 grid place-content-center"
    >
      <Image
        src={skillsImg}
        alt="skills"
        width={700}
        height={700}
        className="animate-skills-image"
      />
    </div>
  );
};

export default React.memo(Skills);
