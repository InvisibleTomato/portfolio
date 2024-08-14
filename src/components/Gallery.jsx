import React from "react";
import "../scss/Gallery.scss";
import GalleryCard from "./GalleryCard";
import CustomCursor from "./CustomCursor";
const Gallery = () => {
  return (
    <div className="Gallery">
      <CustomCursor />
      <div>Gallery</div>
      <GalleryCard />
    </div>
  );
};

export default Gallery;
