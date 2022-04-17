import * as React from "react";
import "../../src/styles/global.css";
import Header from "../components/Header";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="w-full overflow-hidden">
        <Header />
      </div>
    </main>
  );
};

export default IndexPage;
