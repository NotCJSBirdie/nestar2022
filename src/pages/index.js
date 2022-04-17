import * as React from "react";
import "../../src/styles/global.css";
import Career from "../components/Career";
import Differences from "../components/Differences";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sweet from "../components/Sweet";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="w-full overflow-hidden">
        <Header />

        <Hero />

        <Sweet />

        <Differences />

        <Career />

        <GetInTouch />

        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
