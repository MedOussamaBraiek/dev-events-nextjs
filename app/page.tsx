import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import EventsSectionTracker from "@/components/EventsSectionTracker";
import { IEvent } from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URI;

const Page = async () => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Mettups, and Conferences, All in one Place
      </p>
      <ExploreBtn />

      <div
        className="mt-20 space-y-7"
        id="events"
        style={{ position: "relative" }}
      >
        <EventsSectionTracker />
        <h3>Featured Events</h3>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
