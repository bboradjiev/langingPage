import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>My Logo</h1>
      <div className="header__icons_section">
        <a href="https://www.facebook.com/" className="header__icons__">
          <img src="icons/facebook.png" alt="facebook"></img>
        </a>
        <a href="https://twitter.com/" className="header__icons__">
          <img src="icons/twitter.png" alt="twitter"></img>
        </a>
        <a href="https://www.instagram.com/" className="header__icons__">
          <img src="icons/instagram.png" alt="instagram"></img>
        </a>
        <button className="header__subscribe_bnt">Subscribe for more</button>
        
      </div>
    </header>
  );
}

export default Header;
