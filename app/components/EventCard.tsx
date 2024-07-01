import Image from "next/image";
import React from "react";

// Define the props types
interface EventCardProps {
  description: string;
  imageHref: string;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({
  description,
  imageHref,
  index,
}) => {
  const isEvenCard = index % 2 === 0;
  return (
    <div
      className={`flex items-center w-full animate-fadeFromBottom ${
        isEvenCard ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"
      }`}
    >
      <div className={`w-full sm:w-1/2 h-[400px] flex justify-center`}>
        <Image
          className="object-cover"
          src={imageHref}
          alt={description || ""}
          style={{ width: "100%", maxWidth: "initial" }}
          width={800}
          height={400}
        />
      </div>
      <div className="text-sm text-center sm:text-lg w-full sm:w-1/2 flex items-center justify-center p-2">
        {description}
      </div>
    </div>
  );
};

export default EventCard;
