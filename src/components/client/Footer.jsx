import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { email, mobile } from "../../enum";
import { Link } from "react-router-dom";
import { CLIENT } from "../../routes/routeConstants";
import { prductList } from "../../data/productsData";

const Footer = () => {
  return (
    <footer className="paddingTop px-4 responsive">
      <div className="pb-5">
        <span className="d-block text-center text-color-white-80 fs-14">
          Get in Touch with Us
        </span>
        <h3 className="fs-26 fw-bold  ff-primary mb-3 mb-md-4 text-center text-color-white mt-2">
          Let’s Make International Trade <br /> Simple
        </h3>
        <Link to={CLIENT.CONTACT_US}>
          <Button className="secondary-btn text-color-white fs-14 fw-bold mx-auto d-block">
            Let&apos;s Talk With Us <i className="ms-1 ri-arrow-right-line"></i>
          </Button>
        </Link>
      </div>
      <div className="container bg-color-primary-80 rounded-4  pb-5 box-shadow-lg">
        <Col sm={12} xl={11} className="mx-auto">
          <Row>
            <Col md={6} lg={4} className="mt-4 mt-md-5">
              <span className="text-color-white fs-24">Shreevarni Export</span>
              <p className="fs-14 text-color-white-80 mt-2 mt-md-3">
                216, Varni plaza, sudama chowk, mota varachha,surat
              </p>
              <a href={`tel:${"91"+mobile}`}>
                <span className="text-color-white d-block fw-semibold fs-16 mb-1 mb-lg-2">
                  +91 {mobile}
                </span>
              </a>
              <a href={`mailto:${email}`}>
                <span className="text-color-white d-block fw-semibold fs-16">
                  {email}
                </span>
              </a>
            </Col>
            <Col md={6} lg={2} className="mt-4 mt-md-5">
              <h4 className="text-color-white fs-20 fw-bold ff-primary">
                Company
              </h4>
              <ul className="p-0 m-0 mt-3 mt-lg-4 d-flex flex-column gap-2">
                <li className="text-color-white fs-14">
                  <Link to={CLIENT.INDEX} className="text-color-white">
                    Home
                  </Link>
                </li>
                <li className="text-color-white fs-14">
                  <Link to={CLIENT.ABOUT_US} className="text-color-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={2} className="mt-4 mt-md-5">
              <h4 className="text-color-white fs-20 fw-bold ff-primary">
                Products
              </h4>
              <ul className="p-0 m-0 mt-3 mt-lg-4 d-flex flex-column gap-2">
                {prductList?.slice(0, 3)?.map((item, index) => {
                  const path = item?.path;
                  const title = item?.title;
                  return (
                    <li>
                      <Link to={path} className="fs-14 text-color-white">{title}</Link>
                    </li>
                  );
                })}
                {/* <li className="text-color-white fs-14">Surgical Disposable</li>
                <li className="text-color-white fs-14">Coco High Beverages</li>
                <li className="text-color-white fs-14">Gems & Jewelry</li> */}
              </ul>
            </Col>
            <Col md={6} lg={4} className="mt-4 mt-md-5">
              <h4 className="text-color-white fs-20 fw-bold ff-primary">
                Business Hours
              </h4>
              <ul className="m-0 p-0 mt-3 mt-lg-4 fs-14 text-color-white">
                <li className="d-flex align-items-center justify-content-between border-bottom common-white-border pb-2">
                  <span>Monday To Friday</span>
                  <span>9.00 AM - 8.00 PM</span>
                </li>
                <li className="d-flex align-items-center justify-content-between border-bottom common-white-border py-2">
                  <span>Saturday</span>
                  <span>9.00 AM - 6.00 PM</span>
                </li>
                <li className="d-flex align-items-center justify-content-between border-bottom common-white-border py-2">
                  <span>Sunday</span>
                  <span className="text-color-secondary">Closed</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </div>
      <span className="text-center d-block text-white py-4 fs-14">Copyright © {new Date().getFullYear()} shreevarniexport. All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
