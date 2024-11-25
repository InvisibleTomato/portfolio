import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";
import CustomCursor from "./CustomCursor";

const Home = () => {
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
