"use client";

import Image from "next/image";
import React from "react";
import gradient from "../../../public/Gradient.png";
import me from "../../../public/Me.png";
import draw from "../../../public/Ellipse.png";
import arrow from "../../../public/Arrow.png";
import facebookImg from "../../../public/facebook.png";

const Hero = () => {
  return (
    <div id="home" className="my-16 container mx-auto px-4 font-preah">
      <div className="flex max-md:flex-col">
        <div className="relative w-[300px] max-md:w-full flex justify-center items-center">
          <Image
            src={gradient}
            alt="gradient"
            width={250}
            height={250}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-image"
          />
          <Image
            src={me}
            alt="me"
            width={200}
            height={200}
            className="relative"
          />
        </div>
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
            <p className="text-xs">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <p className="text-4xl">I&apos;m a Software Engineer.|</p>
        <p className="text-sm mt-2">
          Currently, I&apos;m a Software Engineer at
          <a
            href="http://facebook.com"
            target="_blank"
            className="inline-flex items-center text-blue-600 relative pl-7"
          >
            <Image
              src={facebookImg}
              alt="facebook"
              width={30}
              height={30}
              className="absolute top-1/2 -translate-y-1/2 left-0"
            />
            Facebook
          </a>
          ,
        </p>
      </div>
      <p className="text-sm max-w-[600px]">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </p>
    </div>
  );
};

export default React.memo(Hero);
