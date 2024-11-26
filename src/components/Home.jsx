import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";
import CustomCursor from "./CustomCursor";

const Home = () => {
  // スクロール禁止の設定
  useEffect(() => {
    // Homeページ表示時にbodyにクラスを追加
    document.body.classList.add("no-scroll");

    // クリーンアップ時にクラスを削除
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []); // 空の依存配列でマウント・アンマウント時に実行
  return (
    <div>
      <CustomCursor />

      <h1>Port Folio</h1>

      <h2 className="typing">I want to be invisible.</h2>

      <div className="home-link">
        <ul>
          <li className="home-gallery">
            <Link to="/gallery" className="home-gallery-link">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
