import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg white-bg container">
        <div className="container-fluid ms-0 ps-0">
          <a className="navbar-brand me-5 " href="#">
            <h4 className="logo-text me-0">
              FUR<span className="color ">NITA</span>
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item pe-5">
                <a
                  className="nav-link active home "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <div className="d-flex justify-content-center">
                  <span className="dot"></span>
                </div>
              </li>
              <li className="nav-item pe-5">
                <a className="nav-link " aria-current="page" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item pe-5">
                <a className="nav-link " aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <div className="d-flex  ">
              <div className="pe-5 ">
                <i className="fa-solid fa-magnifying-glass pointer-cursor"></i>
              </div>
              <div className="pe-5">
                <i className="fa-solid fa-cart-shopping pointer-cursor"></i>
              </div>
              <div>
                <i className="fa-solid fa-user-plus pointer-cursor"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
