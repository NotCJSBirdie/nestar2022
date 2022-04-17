import React from "react";
import HeroImage from "../images/HeroImage.png";
import "./Hero.css";

const HeroBackground = {
  backgroundColor: "#e6c1b6",
};

const HeroText = {
  fontFamily: "Lucifer Sans Medium ",
  color: "#17285B",
};

const Hero = () => {
  return (
    <div className="w-full overflow-hidden py-10 px-10" style={HeroBackground}>
      <div className="w-full flex flex-col items-center">
        <img src={HeroImage} alt="HeroImage" />
      </div>

      <div style={HeroText} className="self-start text-5xl my-6" id="herotext">
        <h1>Make Yourself At Home</h1>
      </div>
    </div>
  );
};

export default Hero;
