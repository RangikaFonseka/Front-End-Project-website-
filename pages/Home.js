import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/front.jpg";
import "../style/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>SARUKETHA </h1>
        <p>HELTHY AND TESTY</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;