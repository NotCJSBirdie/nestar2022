import * as React from "react";
import "../../src/styles/global.css";
import Differences from "../components/Differences";
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
      </div>
    </main>
  );
};

export default IndexPage;
