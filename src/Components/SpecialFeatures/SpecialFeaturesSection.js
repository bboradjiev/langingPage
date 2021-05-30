import React from "react";

function SpecialFeaturesSection() {
  return (
    <section id='special_features' className="features__section">
      <h1>SPECIAL FEATURES </h1>
      <div className="container">
        <div className="features__article">
          <img src="icons/FeaturesImgOne.png" alt="pic"></img>
          <h3>Eligendi ut ut.</h3>
          <p>Oct 25, 2020</p>
        </div>
        <div className="features__article">
          <img src="icons/FeaturesImgTwo.png" alt="pic"></img>
          <h3>Eligendi ut ut.</h3>
          <p>Oct 25, 2020</p>
        </div>
        <div className="features__article">
          <img src="icons/FeaturesImgThree.png" alt="pic"></img>
          <h3>Eligendi ut ut.</h3>
          <p>Oct 25, 2020</p>
        </div>
      </div>
    </section>
  );
}

export default SpecialFeaturesSection;
