import React from "react";
import CareerPic from "../images/Career.png";
import "./Career.css";

const CareerBackground = {
  backgroundColor: "#ffffff",
  color: "#17285B",
};

const Career = () => {
  return (
    <div
      className="w-full overflow-hidden py-16 px-10"
      style={CareerBackground}
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-1/2">
          <img src={CareerPic} className="p-10 md:p-20" alt="CareerPic" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1 className="text-5xl mb-10" id="careertext">
            A career within good homes
          </h1>

          <h3 className="mb-10" id="careertextb">
            If you are interested in creating better homes for the people we’re
            very much interested in you. Read more and make yourself at home on
            our careers page.
          </h3>

          <h3 id="careertextb">Work with us</h3>
        </div>
      </div>
    </div>
  );
};

export default Career;
