import React from "react";
import DifferenceA from "../images/DifferenceA.png";
import DifferenceB from "../images/DifferenceB.png";
import DifferenceC from "../images/DifferenceC.png";
import "./Differences.css";

const DifferencesBackground = {
  backgroundColor: "#17285B",
  color: "#E6C1B6",
};

const Differences = () => {
  return (
    <div
      className="w-full overflow-hidden py-16 px-10"
      style={DifferencesBackground}
    >
      <div className="flex flex-col md:flex-row items-start w-full pb-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl mb-10 md:mb-0" id="differencetext">
            Differences to fall for
          </h1>
        </div>

        <div className="w-full md:w-1/2" id="differencetextb">
          <h3>
            We offer rentals all across greater Berlin and Germany. From the
            inner city to the suburbs. From vibrant areas to the calm and
            restrained. With great service and reachability, we help you find a
            home where you belong.
          </h3>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/4">
          <img
            src={DifferenceA}
            alt="DifferenceA"
            className="w-full p-6 md:pr-6"
          />
        </div>

        <div className="w-fullmd:w-2/4">
          <img
            src={DifferenceB}
            alt="DifferenceB"
            className="w-full p-6 md:pr-6"
          />
        </div>

        <div className="w-full md:w-1/4">
          <img
            src={DifferenceC}
            alt="DifferenceC"
            className="w-full p-6 md:p-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Differences;
