import React from "react";
import Header from "./Header";
import HeaderSections from "./HeaderSections";

function Mainheader({ toggle, setToggle }) {
  return (
    <div className="main__header">
      <div className="navbar__inactive"> <h1>My Logo</h1>
        <button className="hamburger" onClick={() => setToggle(!toggle)}>
          <img src="icons/hamburger.png" alt="hamburger"></img>
        </button>
      </div>
      <Header />
      <HeaderSections toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Mainheader;
