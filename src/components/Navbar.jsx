import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div >
      <div className="container">
        <div className="nav">
      <Link className="white" to="/">Home</Link>
      <Link className="white" to="/products">Products</Link>
      <Link className="white" to="/about">About</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
