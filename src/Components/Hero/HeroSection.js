import React from "react";
import LatestNews from "./LatestNews";
import Pictures from "./Pictures";
import SectionNews from "./SectionNews";

function MainNews() {
  return (
    <>
      <div className="hero">
        <div className="hero__top">
          <Pictures />
          <LatestNews />
        </div>
        <div className="hero__bottom">
          <SectionNews />
        </div>
      </div>
    </>
  );
}

export default MainNews;
