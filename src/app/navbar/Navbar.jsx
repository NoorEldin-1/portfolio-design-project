"use client";

import React, { useCallback, useEffect, useState } from "react";
import Logo from "./components/Logo";
import NavLink from "./components/NavLink";

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

  return (
    <div
      className={`font-jakarta h-16 bg-[#1A0B2E] duration-1000 sticky top-0 left-0 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex justify-between items-center mx-auto h-full px-4">
        <Logo />
        <NavLink />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
