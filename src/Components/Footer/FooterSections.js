import React from "react";

function FooterSections() {
  return (
    <section className="footer__sections">
      <div className="footer__headlines">
        <div className='footer__headline'><a href='#news' ><h1>News</h1></a></div>
                <div className='footer__headline'><a href='#sex'>Sex</a></div>
                <div className='footer__headline'><a href='#special_features'>Special Features</a></div>
                <div className='footer__headline'><a href='#technology'>Technology</a></div>
                <div className='footer__headline'><a href='#sport'>Sport</a></div>
                <div className='footer__headline'><a href='#analysis'>Analysis</a></div>
      </div>
    </section>
  );
}

export default FooterSections;
