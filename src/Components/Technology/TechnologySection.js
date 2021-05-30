import React from "react";
import TechnologyLeft from "./TechnologyLeft";
import TechnologyRight from "./TechnologyRight";

function Technology() {
  return (
    <section id='technology' className="technology">
      <h1>TECHNOLOGY</h1>
      <div className="container">
        <TechnologyLeft />
        <TechnologyRight />
      </div>
    </section>
  );
}

export default Technology;
