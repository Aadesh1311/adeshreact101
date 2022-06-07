import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
      <div className="cont">
    <div className="container">
      <div className="innerdiv first">
        <h3>LOGOBAKERY</h3>
      </div>
      <div className="innerdiv second">
        <p>Services</p>
        <p>Projects</p>
        <p>About</p>
      </div>
      <div className="innerdiv third">
        <button className="btn">Contact</button>
      </div>
    </div>
    </div>
  );
};
export default Navbar;