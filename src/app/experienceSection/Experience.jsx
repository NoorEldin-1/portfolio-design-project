"use client";

import React from "react";
import gradient from "../../../public/Gradient.png";
import Image from "next/image";
import ExperienceCards from "./components/ExperienceCards";

const Experience = () => {
  return (
    <div className="my-36 container mx-auto px-4">
      <p className="capitalize text-3xl mb-10 font-preah">Work Experience</p>
      <div className="flex flex-wrap gap-7 justify-center relative font-jakarta">
        <Image
          src={gradient}
          alt="gradient"
          width={600}
          height={600}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-image"
        />
        <ExperienceCards />
      </div>
    </div>
  );
};

export default React.memo(Experience);
