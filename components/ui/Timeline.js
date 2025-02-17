import EventCard from "@/components/ui/EventCard";

export default function Timeline() {
  const events = [
    {
      title: "Pitri Puja",
      date: "August 16th",
      location: "Bride/Groom's home",
      description:
        "A sacred ceremony honoring ancestors, seeking their blessings for the couple's new journey.",
      hiddenText:
        "As we honor those who came before,\nTheir love and wisdom guide us evermore.\nThrough prayer and remembrance, their presence stays,\nBlessing our journey in countless ways.",
    },
    {
      title: "Sangeet Night",
      date: "August 19th",
      location: "Bride's home",
      description:
        "A fun-filled evening of music and dance, where family and friends celebrate with performances and joy.",
      hiddenText:
        "Music weaves memories, as hearts unite,\nA celebration of love, pure and bright.\nWith every step, joy fills the air,\nA moment to cherish, beyond compare.",
    },
    {
      title: "Mendhi Night",
      date: "August 20th",
      location: "Bride's home",
      description:
        "A vibrant gathering where the bride and guests have henna applied, symbolizing love, luck, and prosperity.",
      hiddenText:
        "Marriage adds celebrations to life.\nMusic adds life to celebrations.\nMendhi adorns the hands as life takes on a new color.",
    },
    {
      title: "Maticoor",
      date: "August 21st",
      location: "Bride/Groom's home",
      description:
        "A pre-wedding ritual where the bride and groom receive blessings, with symbolic earth-digging and turmeric application.",
      hiddenText:
        "With sacred earth, we honor the past,\nTurmeric's touch, a bond to last.\nLaughter and love in every embrace,\nA new journey blessed with grace.",
    },
    {
      title: "Wedding Ceremony",
      date: "August 22nd",
      location: "Triveni Mandir",
      description:
        "A spiritual union filled with traditions, sacred vows, and symbolic rituals marking the couple's new life together.",
      hiddenText:
        "Two souls, two hearts, one sacred flame,\nBound by love, in a vow they proclaim.\nWith every mantra, with every rite,\nA journey begins in love's pure light.",
    },
    {
      title: "Reception",
      date: "August 23rd",
      location: "Pearson Convention Centre",
      description:
        "A grand celebration with dinner, dancing, and heartfelt toasts in honor of the newlyweds.",
      hiddenText:
        "Beneath twinkling skies and melodies so bright,\nDestiny weaves our future on this joyous night.\nWith laughter and dance, our hearts take flight,\nCelebrating a love that was always meant to ignite.",
    },
    {
      title: "Kangan",
      date: "August 24th",
      location: "Groom's home",
      description:
        "A relaxed post-wedding gathering at the groom's home, celebrating the bride's welcome into her new family.",
      hiddenText:
        "Where every bangle chime echoes the timeless bond of love,\nUniting hearts in a festive after-party of love and laughter.\nA night where the wedding's magic lives on in every shared moment.",
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
              className={`relative  w-[45%] md:w-4/12 ${
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
