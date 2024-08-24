import React from "react";
import "../scss/Gallery.scss";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="gallery-card-wrapper">
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
