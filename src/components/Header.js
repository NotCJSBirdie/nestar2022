import React from "react";
import Logo from "../images/Logo.png";
import "../styles/Header.module.css";

const HeaderBackground = {
  backgroundColor: "#e6c1b6",
};

const Header = () => {
  return (
    <div
      className="w-full overflow-hidden py-10 px-10"
      id="headerbody"
      style={HeaderBackground}
    >
      <div className="flex flex-row justify-between w-full">
        <div>
          <img src={Logo} alt="LogoNestar" />
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between mr-10">
            <h1 className="mr-10">EN</h1>

            <h1>DE</h1>
          </div>

          <div>
            <h1>Menu</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
