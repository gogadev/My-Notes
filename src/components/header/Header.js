import React from "react";

import notes from "../../assets/notes.png"

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title"><span>My</span>Notes</h1>
      <img className="notes" src={notes} alt=""/>
    </header>
  );
};

export default Header;
