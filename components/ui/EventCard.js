const EventCard = ({ event }) => {
  return (
    <div className="bg-[#F8E6D1]/90 backdrop-blur-sm rounded-lg shadow-xl p-3 transition-all">
      <h3 className="text-md font-bold text-amber-950">{event.title}</h3>
      <p className="text-amber-900 text-sm mt-1">{event.date}</p>
      <p className="text-amber-900/80 text-xs mt-1">
        📍 <span className="italic">{event.location}</span>
      </p>
    </div>
  );
};

export default EventCard;
