import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis"; // ライブラリのインポート

function App() {
  return (
    <ReactLenis root>
      {" "}
      {/* Lenisでアプリ全体をラップ */}
      <div>
        <Router basename="/portfolio">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </ReactLenis>
  );
}

export default App;
