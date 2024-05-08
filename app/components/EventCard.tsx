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
      className={`flex items-center animate-fadeFromBottom ${
        isEvenCard ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"
      }`}
    >
      <div className={`sm:w-1/2 h-[400px] flex justify-center`}>
        <Image
          className="object-cover"
          src={image.src}
          alt={"some image"}
          width={800}
          height={400}
        />
      </div>
      <div className="text-sm text-center md:text-lg w-1/2 flex items-center justify-center p-2">
        {cardDescriptionText}
      </div>
    </div>
  );
};

export default EventCard;
