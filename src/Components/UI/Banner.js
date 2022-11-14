import React from "react";
import logo from "../../assets/cover.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="slogan">The World's Trusted Currency Authority</h2>
      <img className="banner-joko" src={logo} alt="curreny" />
    </div>
  );
};

export default Banner;
