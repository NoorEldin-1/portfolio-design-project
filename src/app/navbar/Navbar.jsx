"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import logo from "../../../public/Logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const renderLinks = useMemo(() => {
    const links = ["home", "about", "lap"];
    return links.map((e) => {
      return (
        <a
          href={`#${e}`}
          key={e}
          className="text-sm font-bold cursor-pointer animate-link capitalize"
        >
          {e}
        </a>
      );
    });
  }, []);

  return (
    <div
      className={`font-jakarta h-16 bg-[#1A0B2E] duration-1000 sticky top-0 left-0 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex justify-between items-center mx-auto h-full px-4">
        <Image
          src={logo}
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <div className="flex items-center gap-5">{renderLinks}</div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
