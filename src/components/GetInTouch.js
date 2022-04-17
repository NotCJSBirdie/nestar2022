import React from "react";
import "./GetInTouch.css";

const GetInTouchBackground = {
  backgroundColor: "#E6C1B6",
  color: "#17285B",
};

const GetInTouch = () => {
  return (
    <div
      className="w-full overflow-hidden py-16 px-10"
      style={GetInTouchBackground}
    >
      <div className="flex flex-col md:flex-row items-start py-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl mb-10 md:mb-0 " id="gettext">
            Get in Touch
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h3 className="mb-10" id="gettextb">
            Specific questions or just want to get in touch? We’re always happy
            to help!
          </h3>

          <h3>Contact Us</h3>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
