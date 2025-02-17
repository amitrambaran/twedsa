import { useState } from "react";

const EventCard = ({ event }) => {
  const [showHiddenText, setShowHiddenText] = useState(false);

  return (
    <div
      className={`font-cormorant text-lg text-center bg-[#e4c498]/90 backdrop-blur-sm rounded-lg shadow-xl
        relative cursor-pointer overflow-hidden transform-gpu transition-all duration-300 ease-in-out
        h-56 sm:h-48 py-4`}
      onMouseEnter={() => setShowHiddenText(true)}
      onMouseLeave={() => setShowHiddenText(false)}
    >
      <div
        className={`absolute inset-0 p-3 flex flex-col justify-center
          transition-transform duration-300 ease-in-out will-change-transform
          ${
            showHiddenText
              ? "translate-y-[-100%] opacity-0"
              : "translate-y-0 opacity-100"
          }`}
      >
        <h3 className="text-slate-900 font-bold mb-1 leading-tight">
          {event.title}
        </h3>
        <p className="text-slate-900 text-sm mb-1">{event.date}</p>
        <p className="text-red-800 text-xs mb-2">
          📍 <span className="italic">{event.location}</span>
        </p>
        <p className="text-slate-800 text-xs leading-tight">
          {event.description}
        </p>
      </div>

      {event.hiddenText && (
        <div
          className={`absolute inset-0 p-3 flex justify-center items-center
            transition-transform duration-300 ease-in-out will-change-transform
            ${
              showHiddenText
                ? "translate-y-0 opacity-100"
                : "translate-y-[100%] opacity-0"
            }`}
        >
          <div className="max-h-full overflow-y-auto [scrollbar-width:2px]">
            <p className="text-slate-900 text-xs whitespace-pre-line">
              {event.hiddenText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
