"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";

const EventsSectionTracker = () => {
  const hasTracked = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          hasTracked.current = true;
          posthog.capture("events_section_viewed", {
            section: "featured_events",
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} aria-hidden="true" style={{ position: "absolute" }} />;
};

export default EventsSectionTracker;
