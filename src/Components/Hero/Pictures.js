import React from "react";

function Pictures() {
  return (
    <div>
      <section className="hero__images">
        <img
          className="img__background"
          src="./icons/redBackground.png"
          alt="img"></img>
        <img className="img__two" src="./icons/redCar.png" alt="img"></img>
      </section>
      <section className='hero__section_small'>
        <h1>Malaria vaccine to be tested on 4,800 children — UK scientist</h1>
        <p>
          Accusamus dolores quia dolorem quidem a suscipit molestias expedita
          et. Est cum molestiae. Eligendi dolores sint quia velit velit qui odio
          ab.
        </p>
        <button className="read__more__btn">Read More</button>
      </section>
    </div>
  );
}

export default Pictures;
