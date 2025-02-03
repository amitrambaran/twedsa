import * as Tooltip from '@radix-ui/react-tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons';

const EventCard = ({ event }) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <div className="font-cormorant text-lg text-center bg-[#e4c498]/90 backdrop-blur-sm rounded-lg shadow-xl p-3 transition-all relative">
        {event.description && (
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button 
                className="absolute top-2 right-2 text-slate-900/40 hover:text-slate-900/60 focus:outline-none touch-manipulation p-2 -m-2"
                aria-label="View event description"
              >
                <InfoCircledIcon className="w-4 h-4" />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="font-cormorant bg-[#e4c498] text-slate-900 px-4 py-3 rounded-md shadow-lg text-sm max-w-[300px] leading-relaxed whitespace-pre-line text-center z-50 select-none touch-manipulation"
                style={{ backgroundColor: '#e4c498' }}
                sideOffset={5}
                onPointerDownOutside={(e) => e.preventDefault()}
              >
                {event.description}
                <Tooltip.Arrow className="fill-[#e4c498]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        )}
        <h3 className="text-slate-900 font-bold">{event.title}</h3>
        <p className="text-slate-900 text-sm mt-1">{event.date}</p>
        <p className="text-red-800 text-xs mt-1">
          📍 <span className="italic">{event.location}</span>
        </p>
      </div>
    </Tooltip.Provider>
  );
};

export default EventCard;
