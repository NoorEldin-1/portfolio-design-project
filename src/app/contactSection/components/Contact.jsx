"use client";

import React from "react";
import icon1 from "../../../../public/i-1.png";
import icon2 from "../../../../public/i-2.png";
import icon3 from "../../../../public/i-3.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="my-36 container mx-auto px-4 font-preah">
      <p className="mb-14 text-2xl">Contact</p>
      <p className="mb-7 max-w-[600px] text-sm">
        I&apos;m currently looking to join a cross-functional team that values
        improving people&apos;s lives through accessible design. or have a
        project in mind? Let&apos;s connect.
      </p>
      <a
        href="http://gmail.com"
        target="_blank"
        className="mb-5 text-xs text-[#9857D3] font-bold block animate-link w-fit"
      >
        ibrhaimmemon930@gmail.com
      </a>
      <div className="flex gap-5 items-center">
        <a href="#">
          <Image
            src={icon1}
            alt="icon"
            width={20}
            height={20}
            className="cursor-pointer duration-300 hover:scale-90"
          />
        </a>
        <a href="#">
          <Image
            src={icon2}
            alt="icon"
            width={20}
            height={20}
            className="cursor-pointer duration-300 hover:scale-90"
          />
        </a>
        <a href="#">
          <Image
            src={icon3}
            alt="icon"
            width={20}
            height={20}
            className="cursor-pointer duration-300 hover:scale-90"
          />
        </a>
      </div>
    </div>
  );
};

export default React.memo(Contact);
