import React from "react";
import "./Footer.css";

const FooterBackground = {
  backgroundColor: "#17285B",
  color: "#E6C1B6",
};

const Footer = () => {
  return (
    <div
      className="w-full overflow-hidden py-16 px-10"
      style={FooterBackground}
      id="footertext"
    >
      <div className="flex flex-col md:flex-row items-start py-6">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-1/3 flex flex-row md:flex-col items-start justify-between pb-10 md:pb-0">
            <div className="w-full flex flex-col items-start">
              <h1>Contact</h1>
              <h1>Alexanderplatz</h1>
              <h1 className="mb-10">10787 Berlin</h1>

              <h1>info@nestar.de</h1>
            </div>

            <div className="w-full flex flex-col items-end md:items-start">
              <h1>© Nestar 2020</h1>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col items-center justify-between text-center md:text-right">
            <div className="grid grid-cols-2 grid-rows-2 w-full mb-16">
              <h1 className="mb-5 text-left md:text-right">Home</h1>

              <h1 className="mb-5 text-right md:text-right">Careers</h1>

              <h1 className="text-left md:text-right">About</h1>

              <h1 className="text-right md:text-right">Contact</h1>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 md:text-right items-end w-full">
              <h1 className="mb-5 md:mb-0 text-left md:text-right">Imprint</h1>

              <h1 className="mb-5 md:mb-0 text-right md:text-right">Xing</h1>

              <h1 className="text-left md:text-right">Privacy Policy</h1>

              <h1 className="text-right md:text-right">Cookies Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
