import React from "react";
import "../scss/GalleryCard.scss";
import GamingImg from "../images/gaming-img.png";

const GalleryCard = () => {
  return (
    <>
      <div className="card">
        <a href="#">
          <img src={GamingImg} alt="GamingImg" className="card-img" />
        </a>
        <div className="card-text-wrapper">
          <h3 className="card-title">GamingAirways</h3>
          <p className="card-text1">Branding</p>
          <p className="card-text2">coding/design</p>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
