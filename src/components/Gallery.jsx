import React from "react";
import "../scss/Gallery.scss";
import GalleryCard from "./GalleryCard";
import CustomCursor from "./CustomCursor";
const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="gallery-card-wrapper">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
