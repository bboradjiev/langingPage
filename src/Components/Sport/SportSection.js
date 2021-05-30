import React from "react";

function SportSection() {
  return (
    <section id='sport' className="sport">
      <h1>SPORT</h1>
      <div className="container">
        <div className="sport__article">
          <img src="icons/SportImgOne.png" alt="pic"></img>
          <h3>Eligendi ut ut.</h3>
          <p>Oct 25, 2020</p>
        </div>
        <div className="sport__article">
          <img src="icons/SportImgTwo.png" alt="pic"></img>
          <h3>Laborum facilis libero.</h3>
          <p>Oct 25, 2020</p>
        </div>
        <div className="sport__article">
          <img src="icons/SportImgThree.png" alt="pic"></img>
          <h3>Qui corrupti quo dolor id excepturi optio quis.</h3>
          <p>Oct 25, 2020</p>
        </div>
        <div className="sport__article">
          <img src="icons/SportImgFour.png" alt="pic"></img>
          <h3>Illo voluptatem autem veritatis doloribus facilis.</h3>
          <p>Oct 25, 2020</p>
        </div>
      </div>
    </section>
  );
}

export default SportSection;
