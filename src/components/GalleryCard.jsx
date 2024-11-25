import React from "react";
import "../scss/GalleryCard.scss";
import GamingImg from "../images/gaming-img.png";
import Card2 from "../images/card-img2.jpg";
import SyowaImg from "../images/syowa.jpg";
import ColaImg from "../images/craft-cola.png";

// カードで使用するデータの配列
const cardData = [
  {
    imgSrc: GamingImg,
    imgUrl: "https://invisibletomato23.github.io/GamingAirways/",
    title: "GamingAirways",
    text1: "Branding / Solo Project",
    text2: "Design / Coding",
  },
  {
    imgSrc: SyowaImg,
    imgUrl: "https://invisibletomato23.github.io/syowa/",
    title: "Syowaチョコレート",
    text1: "Branding / Team Project",
    text2: "Coding Only",
  },
  {
    imgSrc: ColaImg,
    imgUrl: "https://invisibletomato23.github.io/tokyo-craft-cola/",
    title: "TOKYOくらふとコーラ",
    text1: "Branding / Solo Project",
    text2: "Design / Coding",
  },

  // 追加のカードデータ
];

const GalleryCard = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <a href={card.imgUrl} target="_blank" rel="noopener noreferrer">
            <img src={card.imgSrc} alt={card.title} className="card-img" />
          </a>

          <div className="card-text-wrapper">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text1">{card.text1}</p>
            <p className="card-text2">{card.text2}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default GalleryCard;
