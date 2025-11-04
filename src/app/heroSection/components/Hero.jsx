"use client";

import React from "react";
import HeroImg from "./HeroImg";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";

const Hero = () => {
  return (
    <div id="home" className="my-36 container mx-auto px-4 font-preah">
      <div className="flex max-md:flex-col">
        <HeroImg />
        <HeroTitle />
      </div>
      <HeroDescription />
    </div>
  );
};

export default React.memo(Hero);
