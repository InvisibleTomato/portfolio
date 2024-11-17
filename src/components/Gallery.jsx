import React from "react";
import "../scss/Gallery.scss";
import GalleryCard from "./GalleryCard";
import { Link } from "react-router-dom";
const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="gallery-card-wrapper">
        <GalleryCard />
      </div>
      <div className="back">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default Gallery;
