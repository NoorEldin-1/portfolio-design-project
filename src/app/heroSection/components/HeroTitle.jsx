"use client";

import Image from "next/image";
import React from "react";
import draw from "../../../../public/Ellipse.png";
import arrow from "../../../../public/Arrow.png";

const HeroTitle = () => {
  return (
    <div className="flex-1">
      <p className="relative">
        <Image
          src={arrow}
          alt="arrow"
          width={100}
          height={100}
          className="absolute top-[-25px] left-[-82px] max-md:hidden"
        />
        Hello! I Am <span className="text-[#763CAC]">Ibrahim Memon</span>
      </p>

      <div className="mt-14">
        <p className="text-sm">A Designer who</p>
        <p className="text-4xl">
          Judges a book
          <br />
          by its{" "}
          <span className="relative text-[#763CAC]">
            cover
            <span className="grid place-content-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
              <Image
                src={draw}
                alt="draw"
                width={110}
                height={110}
                className=""
              />
            </span>
          </span>
          ...
        </p>
        <p className="text-xs mt-2">
          Because if the cover does not impress you what else can?
        </p>
      </div>
    </div>
  );
};

export default React.memo(HeroTitle);
