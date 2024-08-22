import React from "react";
import "../scss/GalleryCard.scss";
import GamingImg from "../images/gaming-img.png";

// カードで使用するデータの配列
const cardData = [
  {
    imgSrc: "../images/gaming-img.png",
    title: "GamingAirways",
    text1: "Branding",
    text2: "coding/design",
  },
  {
    imgSrc: "../images/card-img1.jpg",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy/design",
  },
  {
    imgSrc: "../images/card-img2.jpg",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy/design",
  },
  {
    imgSrc: "../images/card-img3.jpg",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy/design",
  },
  {
    imgSrc: "../images/card-img4.jpg",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy/design",
  },
  {
    imgSrc: "../images/card-img5.jpg",
    title: "AdventureQuest",
    text1: "Marketing",
    text2: "strategy/design",
  },
  // 追加のカードデータ
];

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
