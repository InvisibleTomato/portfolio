import React from "react";
import "../scss/GalleryCard.scss";
import GamingImg from "../images/gaming-img.png";

const GalleryCard = () => {
  return (
    <div>
      <div className="card">
        <a href="#">
          <img src={GamingImg} alt="GamingImg" />
        </a>
        <h3>GamingAirways</h3>
        <p>Branding</p>
        <p>coding/design</p>
      </div>
    </div>
  );
};

export default GalleryCard;
