import EventCard from "../components/EventCard";
import events from "./events.json";

interface Event {
  description: string;
  imageHref: string;
  position: number;
}

export default function Events() {
  return (
    <section className="m-2">
      {events.map((event: Event, index: number) => (
        <EventCard
          description={event.description}
          imageHref={event.imageHref}
          index={event.position}
          key={index}
        />
      ))}
    </section>
  );
}
