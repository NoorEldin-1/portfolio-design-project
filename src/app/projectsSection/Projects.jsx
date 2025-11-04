"use client";

import React, { useMemo } from "react";
import pro1 from "../../../public/pro1.png";
import proIcon from "../../../public/proIcon.png";
import gradient from "../../../public/Gradient.png";
import Image from "next/image";

const Projects = () => {
  const renderProjects = useMemo(() => {
    const elements = Array.from({ length: 4 });
    return elements.map((_, i) => {
      const isOdd = i % 2 !== 0;
      return (
        <div
          key={i}
          className={`relative flex max-md:flex-col max-md:items-center max-md:gap-5 ${
            isOdd ? "flex-row-reverse gap-4" : ""
          }`}
        >
          <Image
            src={gradient}
            alt="gradient"
            width={300}
            height={300}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col gap-1 z-20">
            <p className="text-[#9857D3] font-bold text-sm">Featured Project</p>
            <p className="font-bold text-[#CCD6F6] text-2xl">Example Project</p>
            <p
              className={`p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg max-w-[600px] my-3 ${
                isOdd ? "md:-ml-8" : ""
              }`}
            >
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            <div className="flex gap-5 max-md:justify-center">
              <Image src={proIcon} alt="pro" width={20} height={20} />
              <Image src={proIcon} alt="pro" width={20} height={20} />
            </div>
          </div>
          <div className="relative">
            <div
              className={`w-full h-full bg-[#2B0B3A] absolute -top-5  ${
                isOdd ? "-left-10" : "-left-20"
              } rounded-4xl max-md:hidden`}
            ></div>
            <Image
              src={pro1}
              alt="pro"
              width={500}
              height={500}
              className={`${isOdd ? "" : "-ml-10"} relative z-0 max-md:ml-0`}
            />
          </div>
        </div>
      );
    });
  }, []);
  return (
    <div id="about" className="my-36 container mx-auto px-4 font-jakarta">
      <div className="flex flex-col gap-32">{renderProjects}</div>
    </div>
  );
};

export default React.memo(Projects);
