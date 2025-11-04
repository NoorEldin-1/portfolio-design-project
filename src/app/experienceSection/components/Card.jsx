"use client";

import Image from "next/image";
import React from "react";

const Card = ({ image, title, info }) => {
  return (
    <div className="bg-[#1A0B2E] w-[400px] rounded-md border-t-4 border-[#763CAC] flex p-2 gap-2 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-0 h-full bg-transparent card-effect"></div>
      <div className="grid place-content-center relative">
        <Image src={image} alt="ex1" width={100} height={100} />
      </div>
      <div className="flex-1 flex flex-col gap-2 relative">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-xs opacity-75">{info}</p>
        <button className="border border-[#763CAC] px-5 py-1.5 text-sm rounded-xl w-fit font-bold cursor-pointer duration-300 hover:bg-[#763CAC]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default React.memo(Card);
