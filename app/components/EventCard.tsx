import Image from "next/image";
import React from "react";

interface EventCardData {
  description: Description;
  image: {
    src: string;
  };
  index: number;
  key: string;
}

interface Content {
  type: string;
  attrs?: {
    textAlign: string;
  };
  content?: {
    text: string;
    type: string;
  }[];
}

interface Description {
  json: { content: Content[]; type: string };
}

const EventCard = ({ description, image, index }: EventCardData) => {
  const cardDescriptionText = description.json.content[0]?.content?.[0]?.text;
  const isEvenCard = index % 2 === 0;
  return (
    <div
      className={`flex items-center w-full animate-fadeFromBottom ${
        isEvenCard ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"
      }`}
    >
      <div className={`w-full sm:w-1/2 min-h-[400px] flex justify-center`}>
        <Image
          className="object-cover"
          src={image.src}
          alt={cardDescriptionText || ""}
          style={{ width: "100%" }}
          width={800}
          height={400}
        />
      </div>
      <div className="text-sm text-center sm:text-lg w-full sm:w-1/2 flex items-center justify-center p-2">
        {cardDescriptionText}
      </div>
    </div>
  );
};

export default EventCard;
