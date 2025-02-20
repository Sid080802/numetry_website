import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";  // Ensure CSS is applied

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo on the Left */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/footer/numetry-logo.jpg"
            alt="Company Logo"
            className="logo-img me-3" /* Increased logo size */
          />
          <span className="logo-text">Numetry-Technologies</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/about">ABOUT US</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">SERVICES</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technologies">TECHNOLOGIES</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/industry">INDUSTRY</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/hire">HIRE DEVELOPER</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT US</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/what-we-do">WHAT WE DO</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
