import React from "react";
import { Link, useHistory } from "react-router-dom";

const SellerNavbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark px-5">
        <Link className="navbar-brand" to="/">
          Food Masters
        </Link>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item">
              <Link className="nav-link"
                to="/business/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"
                to="/business/addRestaurant">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SellerNavbar;
