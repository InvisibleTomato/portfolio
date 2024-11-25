import React from "react";
import "../scss/Gallery.scss";
import GalleryCard from "./GalleryCard";
import { Link } from "react-router-dom";
import FadeinComponent from "./FadeinComponent";

const Gallery = () => {
  return (
    <FadeinComponent>
      <div className="Gallery">
        <div className="gallery-card-wrapper">
          <GalleryCard />
        </div>
        <div className="back">
          <Link to="/">Back</Link>
        </div>
      </div>
    </FadeinComponent>
  );
};

export default Gallery;
