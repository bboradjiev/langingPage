import React from "react";
import FooterIcons from "./FooterIcons";
import FooterSections from "./FooterSections";

function Footer() {
  return (
    <footer className="footer">
      <div className='container'>
        <h1 className="footer__logo">L</h1>
        <FooterSections />
      </div>
          <FooterIcons />
     </footer>
  );
}

export default Footer;
