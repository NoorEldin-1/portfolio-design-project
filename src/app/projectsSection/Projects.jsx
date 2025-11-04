"use client";

import React, { useMemo } from "react";
import ProjectsCards from "./ProjectsCards";

const Projects = () => {
  return (
    <div id="about" className="my-36 container mx-auto px-4 font-jakarta">
      <ProjectsCards />
    </div>
  );
};

export default React.memo(Projects);
