import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="container">
        <div>
          <h1>Overreacted</h1>
        </div>
        <div>
          <button>Toggle</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
