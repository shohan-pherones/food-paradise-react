import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="logo">
      <h1>FOOD PARADISE</h1>
      <div className="search-field">
        <input type="text" placeholder="Search any food..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
