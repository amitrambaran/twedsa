import { useState } from "react";

const EventCard = ({ event }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className={`font-cormorant text-lg text-center bg-[#e4c498]/90 backdrop-blur-sm rounded-lg shadow-xl
        relative cursor-pointer overflow-hidden transform-gpu transition-all duration-300 ease-in-out
        ${showDescription ? "h-[200px]" : "h-[120px]"}`}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div
        className={`absolute inset-0 p-3 flex flex-col justify-center
          transition-transform duration-300 ease-in-out will-change-transform
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
          className={`absolute inset-0 p-3 flex items-center
            transition-transform duration-300 ease-in-out will-change-transform
            ${
              showDescription
                ? "translate-y-0 opacity-100"
                : "translate-y-[100%] opacity-0"
            }`}
        >
          <div className="max-h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
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
