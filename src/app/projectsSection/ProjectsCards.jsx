"use client";

import React, { useMemo } from "react";
import cardImage from "../../../public/pro1.png";
import cardIcon from "../../../public/proIcon.png";
import Card from "./Card";

const ProjectsCards = () => {
  const ProjectsCards = useMemo(() => {
    const cards = Array.from({ length: 4 });
    return cards.map((_, i) => {
      const isOdd = i % 2 !== 0;
      return (
        <Card
          key={i}
          image={cardImage}
          title={`Featured Project`}
          subTitle={`Example Project`}
          icon={cardIcon}
          info={`A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.`}
          isOdd={isOdd}
        />
      );
    });
  }, []);
  return <div className="flex flex-col gap-32">{ProjectsCards}</div>;
};

export default React.memo(ProjectsCards);
