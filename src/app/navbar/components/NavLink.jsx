"use client";

import React, { useMemo } from "react";

const NavLink = () => {
  const LinksElement = useMemo(() => {
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
  return <div className="flex items-center gap-14">{LinksElement}</div>;
};

export default React.memo(NavLink);
