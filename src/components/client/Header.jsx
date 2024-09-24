import React from "react";
import { email, mobile, socialMedia } from "../../enum";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-color-primary w-100 responsive">
      {/* navbar stripe */}
      <div className="text-color-white container py-2 d-flex align-items-center justify-content-between">
        <div>
          <a href={`tel:${mobile}`}>
            <i className="ri-phone-fill text-color-secondary fs-18 me-2"></i>
            <span className="d-none d-sm-inline text-color-white hover-text-secondary transition-color">
              +91 {mobile}
            </span>
          </a>
          
          <a href={`mailto:${email}`}>
            <i className="ri-mail-open-fill ms-2 ms-md-3 fs-18 me-2 text-color-secondary"></i>
            <span className="d-none d-sm-inline text-color-white hover-text-secondary transition-color">
              {email}
            </span>
          </a>
        </div>
        <div className="d-flex align-items-center gap-2">
          {socialMedia.map((item, index) => {
            return (
              <a
                href={item.link}
                className="text-color-white"
                target="_blank"
                key={index}
              >
                <i
                  className={`${item.icon} h-30px w-30px border d-flex align-items-center justify-content-center rounded-circle fs-16 header-icon`}
                ></i>
              </a>
            );
          })}
        </div>
      </div>

      {/* nav bar */}
      <Navbar bg="light" expand="md">
        <div className="container">
          {/* Left Side: Logo */}
          <Navbar.Brand href="/">
            {/* <img
              src="/path-to-your-logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "} */}
            SHREE
          </Navbar.Brand>

          {/* Responsive Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Right Side: Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3 py-3 py-md-0">
              <Link
                to="/"
                className="hover-text-secondary text-color-primary transition-color"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover-text-secondary text-color-primary transition-color"
              >
                About Us
              </Link>
              <Link
                to="/about"
                className="hover-text-secondary text-color-primary transition-color"
              >
                Product
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
