import React, { useEffect } from "react";
import "../scss/CustomCursor.scss"; // スタイルシートをインポート

const CustomCursor = () => {
  useEffect(() => {
    const cursorWrapper = document.getElementById("cursor-wrapper");
    const cursorInner = document.querySelector(".custom-cursor-inner");

    // h2の要素を取得
    const typingText = document.querySelector(".typing");

    const handleMouseMove = (e) => {
      if (cursorWrapper) {
        cursorWrapper.style.left = `${e.clientX}px`;
        cursorWrapper.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursorInner) {
        cursorInner.style.backgroundColor = "yellow";
        cursorInner.style.opacity = "0.7"; // ホバー時の色
      }
    };

    const handleMouseLeave = () => {
      if (cursorInner) {
        cursorInner.style.backgroundColor = "#52C1FF"; // 元の色
      }
    };

    const handleH2MouseEnter = () => {
      if (typingText) {
        typingText.style.color = "#fff";
      }
    };

    const handleH2MouseLeave = () => {
      if (typingText) {
        typingText.style.color = "#000"; // 元のテキストカラー
      }
    };

    // h2 要素に対してホバーイベントを追加
    if (typingText) {
      typingText.addEventListener("mouseenter", handleH2MouseEnter);
      typingText.addEventListener("mouseleave", handleH2MouseLeave);
    }

    document.addEventListener("mousemove", handleMouseMove);

    // すべてのリンクに対してホバーイベントを追加
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    // クリーンアップ
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (typingText) {
        typingText.removeEventListener("mouseenter", handleH2MouseEnter);
        typingText.removeEventListener("mouseleave", handleH2MouseLeave);
      }
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div id="cursor-wrapper" className="custom-cursor-wrapper">
      <div className="custom-cursor-outer"></div>
      <div className="custom-cursor-inner"></div>
    </div>
  );
};

export default CustomCursor;
