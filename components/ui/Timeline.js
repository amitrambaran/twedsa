import EventCard from "@/components/ui/EventCard";

export default function Timeline() {
  const events = [
    {
      title: "Pitri Puja",
      date: "August 16th",
      location: "Bride/Groom's home",
      description:
        "As we honor those who came before,\nTheir love and wisdom guide us evermore.\nThrough prayer and remembrance, their presence stays,\nBlessing our journey in countless ways.",
    },
    {
      title: "Sangeet",
      date: "August 19th",
      location: "Bride's home",
      description:
        "Music weaves memories, as hearts unite,\nA celebration of love, pure and bright.\nWith every step, joy fills the air,\nA moment to cherish, beyond compare.",
    },
    {
      title: "Mehndi Night",
      date: "August 20th",
      location: "Bride's home",
      description:
        "Marriage adds celebrations to life.\nMusic adds life to celebrations.\nMendhi adorns the hands as life takes on a new color.",
    },
    {
      title: "Maticoor Night",
      date: "August 21st",
      location: "Bride/Groom's home",
      description:
        "With sacred earth, we honor the past,\nTurmeric's touch, a bond to last.\nLaughter and love in every embrace,\nA new journey blessed with grace.",
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
    <div className="relative w-full flex justify-center mt-24">
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
