import { useState } from "react";

const EventCard = ({ event }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className={`font-cormorant text-lg text-center bg-[#e4c498]/90 backdrop-blur-sm rounded-lg shadow-xl
        transition-all duration-500 ease-in-out relative cursor-pointer overflow-hidden
        ${showDescription ? "h-[200px]" : "h-[120px]"}`}
      onClick={() => setShowDescription(!showDescription)}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div
        className={`transition-all duration-500 ease-in-out h-full flex flex-col justify-center p-3
          ${
            showDescription
              ? "translate-y-[-100%] opacity-0"
              : "translate-y-0 opacity-100"
          }`}
      >
        <h3 className="text-slate-900 font-bold">{event.title}</h3>
        <p className="text-slate-900 text-sm mt-1">{event.date}</p>
        <p className="text-red-800 text-xs mt-1">
          📍 <span className="italic">{event.location}</span>
        </p>
      </div>

      {event.description && (
        <div
          className={`transition-all duration-500 ease-in-out h-full p-3 flex items-center
            ${
              showDescription
                ? "translate-y-[-100%] opacity-100"
                : "translate-y-0 opacity-0"
            }`}
        >
          <div className="overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-amber-900">
            <p className="text-slate-900 text-sm whitespace-pre-line">
              {event.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
