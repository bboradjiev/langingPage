import React from "react";

function HeaderSections({ toggle, setToggle }) {
  const toggleNavbar = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  return (
    <nav className={`header__nav_sections ${!toggle ? "" : "inactive"}`}>
      
      <div className="nav__headlines">
        <div className="header__headline" onClick={() => toggleNavbar()}>
          <a href="#news">
            <h1>News</h1>
          </a>
        </div>
        <div className="header__headline" onClick={() => toggleNavbar()}>
          <a href="#sex">Sex</a>
        </div>
        <div className="header__headline" onClick={() => toggleNavbar()}>
          <a href="#special_features">Special Features</a>
        </div>
        <div className="header__headline" onClick={() => toggleNavbar()}>
          <a href="#technology">Technology</a>
        </div>
        <div className="header__headline" onClick={() => toggleNavbar()}>
          <a href="#sport">Sport</a>
        </div>
        <div className="header__headline" onClick={() => toggleNavbar()}>
          <a href="#analysis">Analysis</a>
        </div>
      </div>

      <div className="nav__icons">
        <div className="small__icons">
          <img src="./icons/cloud.png" alt="cloud"></img>
        </div>
        <div className="small__icons">
          <p>28°, Sofia</p>
        </div>
        <div className="small__icons">
          <img src="./icons/glass.png" alt="glass"></img>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSections;
