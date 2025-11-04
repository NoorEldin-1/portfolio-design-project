"use client";

import Image from "next/image";
import React from "react";
import gradient from "../../../public/Gradient.png";
import me from "../../../public/Me.png";

const HeroImg = () => {
  return (
    <div className="relative w-[300px] max-md:w-full flex justify-center items-center">
      <Image
        src={gradient}
        alt="gradient"
        width={250}
        height={250}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-image"
      />
      <Image src={me} alt="me" width={200} height={200} className="relative" />
    </div>
  );
};

export default React.memo(HeroImg);
