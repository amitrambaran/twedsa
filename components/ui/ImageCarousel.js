import React from "react";
import Carousel from "react-instagram-carousel";

const images = [
  "/portrait.jpg",
  "prayer.jpg",
  "rings.jpg",
  "rings2.jpg",
  "/forehead.jpg",
  "/kiss.jpg",
];

const ImageCarousel = () => {
  return (
    <div style={{ width: "350px", height: "450px" }}>
      <Carousel images={images} />
    </div>
  );
};

export default ImageCarousel;
