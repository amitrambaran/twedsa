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
    <div className={`flex ${isEvenCard ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-1/2 flex justify-center`}>
        <Image src={image.src} alt={"some image"} width={800} height={400} />
      </div>
      <div className="text-xl w-1/2 flex items-center justify-center p-4">
        {cardDescriptionText}
      </div>
    </div>
  );
};

export default EventCard;
