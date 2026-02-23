export type EventItem= {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events : EventItem[] = [
  {
    title: "React Conference 2026",
    image: "/images/event1.png",
    slug: "react-conference-2026",
    location: "San Francisco, CA",
    date: "March 15-17, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Next.js Summit",
    image: "/images/event2.png",
    slug: "nextjs-summit-2026",
    location: "Austin, TX",
    date: "April 8-10, 2026",
    time: "8:30 AM - 5:30 PM",
  },
  {
    title: "JavaScript Global Summit",
    image: "/images/event3.png",
    slug: "js-global-summit-2026",
    location: "Berlin, Germany",
    date: "May 20-22, 2026",
    time: "10:00 AM - 7:00 PM",
  },
  {
    title: "Web Development Hackathon",
    image: "/images/event4.png",
    slug: "web-dev-hackathon-2026",
    location: "New York, NY",
    date: "May 30 - June 1, 2026",
    time: "Friday 6:00 PM - Sunday 6:00 PM",
  },
  {
    title: "TypeScript Advanced Workshop",
    image: "/images/event5.png",
    slug: "typescript-workshop-2026",
    location: "Seattle, WA",
    date: "June 10-12, 2026",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "AI & Web Development Conference",
    image: "/images/event6.png",
    slug: "ai-web-dev-2026",
    location: "Toronto, Canada",
    date: "July 14-16, 2026",
    time: "8:00 AM - 5:00 PM",
  },
];
