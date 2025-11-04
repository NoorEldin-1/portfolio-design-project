"use client";

import Image from "next/image";
import React from "react";
import facebookImg from "../../../public/facebook.png";

const HeroDescription = () => {
  return (
    <>
      <div className="my-10">
        <p className="text-4xl mt-24">I&apos;m a Software Engineer.|</p>
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
    </>
  );
};

export default React.memo(HeroDescription);
