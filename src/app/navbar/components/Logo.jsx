"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../../public/Logo.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="logo"
      width={20}
      height={20}
      className="cursor-pointer"
    />
  );
};

export default React.memo(Logo);
