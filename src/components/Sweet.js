import React from "react";
import SweetImage from "../images/Sweet.png";
import "./Sweet.css";

const SweetBackground = {
  backgroundColor: "#ffffff",
  color: "#17285B",
};

const Sweet = () => {
  return (
    <div className="w-full overflow-hidden py-16 px-10" style={SweetBackground}>
      <div
        className="flex flex-col md:flex-row items-start w-full"
        id="sweettext"
      >
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <h1 className="md:pr-16 text-6xl mb-10 md:mb-0">
            Sweet, sweet homes
          </h1>
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center">
          <img src={SweetImage} alt="SweetImage" className="w-full mb-10" />

          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <h3 className="w-full md:w-2/3">
              We provide rentals that make everyone feel welcome. Because
              ultimately that’s the kind of city we want to live in. With great
              service and smart solutions we attend to our tenants’ equally
              diverse needs. In the end, it’s about providing a springboard from
              where to take on the world. A place you can truly call sweet,
              sweet home.
            </h3>

            <h3 className="w-full md:w-1/3 text-left md:text-right">
              About us
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sweet;
