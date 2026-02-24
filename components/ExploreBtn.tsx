"use client";

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleClick = () => {
    console.log("Hello oussama");
    posthog.capture("explore_events_clicked", {
      source: "homepage_hero",
    });
  };

  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={handleClick}
    >
      <a href="#events">Explore Events</a>
      <Image
        src="/icons/arrow-down.svg"
        alt="arraw-down"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ExploreBtn;
