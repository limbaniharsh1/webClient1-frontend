import React, { useState } from "react";
import { email, mobile, socialMedia } from "../../enum";
import { Collapse, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CLIENT } from "../../routes/routeConstants";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(null);

  const md = useMediaQuery({ query: "(max-width: 768px)" });

  const data = [
    {
      title: "home",
      path: CLIENT.INDEX,
    },
    {
      title: "About Us",
      path: CLIENT.ABOUT_US,
    },
    {
      title: "Products",
      subNav: [
        {
          title: "surgical disposable",
          path: "/surgicle-disposable",
        },
      ],
    },
    {
      title: "Accreditation",
      path: CLIENT.ACCREDITATION,
    },
    {
      title: "Participation",
      path: CLIENT.PARTICIPATION,
    },
    {
      title: "Contact Us",
      path: CLIENT.CONTACT_US,
    },
  ];

  return (
    <>
      {/* navbar stripe */}
      <div className="bg-color-primary w-100 ">
        <div className="text-color-white container py-2 d-flex align-items-center justify-content-between">
          <div>
            <a href={`tel:${mobile}`}>
              <i className="ri-phone-fill text-color-secondary fs-18 me-2"></i>
              <span className="d-none fs-14 fw-semibold d-sm-inline text-color-white hover-text-secondary transition-color">
                +91 {mobile}
              </span>
            </a>

            <a href={`mailto:${email}`}>
              <i className="ri-mail-open-fill ms-2 ms-md-3 fs-18 me-2 text-color-secondary"></i>
              <span className="d-none fs-14 fw-semibold d-sm-inline text-color-white hover-text-secondary transition-color">
                {email}
              </span>
            </a>
          </div>
          <div className="d-flex align-items-center gap-2">
            {socialMedia.map((item, index) => {
              return (
                <a
                  aria-label={item.icon}
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
      </div>

      {/* nav bar */}
      <header className=" responsive  z-3 position-sticky top-0 responsive">
        <Navbar bg="light" expand="md" expanded={expanded} className="py-0">
          <div className="container">
            {/* Left Side: Logo */}
            <Navbar.Brand href="/" className="py-3">
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
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded((pre) => !pre)}
            />

            {/* Right Side: Navigation Links */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex gap-md-3">
                {data?.map((item, index) => {
                  const subNav = item?.subNav;
                  if (subNav?.length) {
                    return (
                      <span key={index} className={`${md ? "" : "hover-nav"}`}>
                        <span
                          onClick={() =>
                            setOpen((pre) =>
                              pre !== item?.title ? item?.title : null
                            )
                          }
                          className={`${
                            pathname !== item?.path
                              ? "hover-text-secondary text-color-primary"
                              : "text-color-secondary"
                          }  transition-color fw-semibold text-capitalize  d-block cursor-pointer py-2 py-md-3`}
                        >
                          {item.title}
                          <span className="d-md-none">
                            {item?.title == open ? (
                              <i class="ri-arrow-drop-up-fill ms-2"></i>
                            ) : (
                              <i className="ri-arrow-drop-down-fill ms-2"></i>
                            )}
                          </span>
                        </span>
                        {!md ? (
                          <ul className="rounded-3">
                            {subNav?.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`${
                                    pathname !== item?.path
                                      ? "hover-text-secondary text-color-primary"
                                      : "text-color-secondary"
                                  }  transition-color fw-semibold text-capitalize hover-nav d-block cursor-pointer`}
                                >
                                  {item?.title}
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <Collapse in={item?.title == open}>
                            <ul className="rounded-3 p-0 m-0 ms-3">
                              {subNav?.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={`${
                                      pathname !== item?.path
                                        ? "hover-text-secondary text-color-primary"
                                        : "text-color-secondary"
                                    }  transition-color fw-semibold text-capitalize d-block cursor-pointer py-2`}
                                  >
                                    {item?.title}
                                  </li>
                                );
                              })}
                            </ul>
                          </Collapse>
                        )}
                      </span>
                    );
                  }
                  return (
                    <Link
                      onClick={() => setExpanded(false)}
                      key={index}
                      to={item?.path}
                      className={`${
                        pathname !== item?.path
                          ? "hover-text-secondary text-color-primary"
                          : "text-color-secondary"
                      }  transition-color fw-semibold text-capitalize py-2 py-md-3`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
