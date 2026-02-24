import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import EventsSectionTracker from "@/components/EventsSectionTracker";
import { events } from "@/lib/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Mettups, and Conferences, All in one Place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7" id="events" style={{ position: "relative" }}>
        <EventsSectionTracker />
        <h3>Featured Events</h3>

        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
