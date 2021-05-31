import React from "react";

function SexSection() {
  return (
    <section id='sex' className="sex">
      <h1>SEX</h1>
      <div className="sex__big_container">
        <div className="sex__small_container">
          <img className='features__article_img' src="icons/SexImgOne.png" alt="pic"></img>
          <h3>Magnam quos enim aut ut ex veniam aut commodi sit.</h3>
          <p>Dec 2, 2020</p>
        </div>
        <div className="sex__small_container">
          <img className='features__article_img' src="icons/SexImgTwo.png" alt="pic"></img>
          <h3>Voluptatibus eius autem veritatis est architecto aperiam praesentium.</h3>
          <p>Dec 2, 2020</p>
        </div>
        <div className="sex__small_container">
          <img className='features__article_img' src="icons/SexImgThree.png" alt="pic"></img>
          <h3>Non dolorem corporis ducimus alias molestiae vero beatae amet.</h3>
          <p>Dec 2, 2020</p>
        </div>
      </div>
    </section>
  );
}

export default SexSection;
