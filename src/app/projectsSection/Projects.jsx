"use client";

import React, { useMemo } from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="about" className="my-36 container mx-auto px-4 font-jakarta">
      <ProjectsCard />
    </div>
  );
};

export default React.memo(Projects);
