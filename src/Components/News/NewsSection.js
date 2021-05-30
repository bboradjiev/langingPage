import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function NewsSection() {
  return (
    <section id="news" className="news">
      <h1>NEWS</h1>
      <div className="news__container">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
}

export default NewsSection;
