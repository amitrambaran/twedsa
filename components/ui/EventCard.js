const EventCard = ({ event }) => {
  return (
    <div className="bg-[#e4c498]/90 backdrop-blur-sm rounded-lg shadow-xl p-3 transition-all">
      <h3 className="text-slate-900 font-bold">{event.title}</h3>
      <p className="text-slate-900 text-sm mt-1">{event.date}</p>
      <p className="text-red-800 text-xs mt-1">
        📍 <span className="italic">{event.location}</span>
      </p>
    </div>
  );
};

export default EventCard;
