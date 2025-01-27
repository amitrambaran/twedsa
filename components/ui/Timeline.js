import EventCard from "@/components/ui/EventCard";

export default function Timeline() {
  const events = [
    {
      title: "Pitri Puja",
      date: "August 16th",
      location: "Bride/Groom's home",
    },
    {
      title: "Sangeet",
      date: "August 19th",
      location: "Bride's home",
    },
    {
      title: "Mehndi Night",
      date: "August 20th",
      location: "Bride's home",
    },
    {
      title: "Maticoor Night",
      date: "August 21st",
      location: "Bride/Groom's home",
    },
    {
      title: "The Wedding",
      date: "August 22nd",
      location: "Triveni Mandir",
    },
    {
      title: "The Reception",
      date: "August 23rd",
      location: "Pearson Convention Centre",
    },
    {
      title: "Kangan",
      date: "August 24th",
      location: "Groom's home",
    },
  ];

  return (
    <div className="relative w-full flex justify-center">
      {/* Center Line */}
      <div className="absolute h-full w-1 bg-[#f0d7bb]/80 left-1/2 transform -translate-x-1/2"></div>

      {/* Event Cards */}
      <div className="w-full max-w-3xl p-2 relative">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-4 relative`}
          >
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-[#dab47b] rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div
              className={`relative  w-2/5 md:w-4/12 ${
                index % 2 === 0 ? "pr-1" : "pl-1"
              }`}
            >
              <EventCard event={event} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
