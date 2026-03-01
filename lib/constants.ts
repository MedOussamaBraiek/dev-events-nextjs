import { IEvent } from "@/database";

export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: IEvent[] = [
  {
    title: "React Conference 2026",
    image: "/images/event1.png",
    slug: "react-conference-2026",
    location: "San Francisco, CA",
    date: "March 15-17, 2026",
    time: "9:00 AM - 6:00 PM",
    description:
      "Join us for the annual React Conference where developers from around the world gather to share knowledge, network, and learn about the latest in React development.",
    overview:
      "The React Conference 2026 is the premier event for React developers, featuring keynote speakers, technical sessions, workshops, and networking opportunities. Whether you're a beginner or an experienced developer, this conference has something for everyone.",
    audience:
      "React developers, JavaScript developers, frontend developers, software engineers, tech enthusiasts",
    agenda: [
      "Day 1: Keynote, React 18 Deep Dive, State Management in React",
      "Day 2: Concurrent Mode, React Native Updates, Performance Optimization",
      "Day 3: Testing React Applications, GraphQL with React, Future of React",
    ],
    organizer: "React Community",
    tags: ["React", "JavaScript", "Frontend", "Web Development"],
    mode: "In-Person",
    venue: "Moscone Center",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Next.js Summit",
    image: "/images/event2.png",
    slug: "nextjs-summit-2026",
    location: "Austin, TX",
    date: "April 8-10, 2026",
    time: "8:30 AM - 5:30 PM",
    description:
      "The Next.js Summit is the ultimate event for developers using the Next.js framework. Join us for three days of insightful talks, hands-on workshops, and networking with fellow Next.js enthusiasts.",
    overview:
      "The Next.js Summit 2026 brings together developers, industry experts, and the Next.js core team to explore the latest features, best practices, and real-world use cases of Next.js. Whether you're building a personal project or a large-scale application, this summit is designed to help you get the most out of Next.js.",
    audience:
      "Next.js developers, React developers, frontend developers, software engineers, tech enthusiasts",
    agenda: [
      "Day 1: Keynote, Next.js 13 Features, Server Components",
      "Day 2: Static Site Generation, Incremental Static Regeneration, API Routes",
      "Day 3: Performance Optimization, Next.js and GraphQL, Future of Next.js",
    ],
    organizer: "Vercel",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    mode: "In-Person",
    venue: "Austin Convention Center",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
