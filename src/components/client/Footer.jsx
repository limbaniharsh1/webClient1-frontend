import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { email, mobile } from "../../enum";

const Footer = () => {
  return (
    <footer className="paddingY px-4 responsive">
        <div className="pb-5">
          <span className="d-block text-center text-color-white-80 fs-14">
            Get in Touch with Us
          </span>
          <h3 className="fs-26 fw-bold  ff-primary mb-3 mb-md-4 text-center text-color-white mt-2">
            Let’s Make International Trade <br /> Simple
          </h3>
          <Button className="secondary-btn text-color-white fs-14 fw-bold mx-auto d-block">
            Let&apos;s Talk With Us <i className="ms-1 ri-arrow-right-line"></i>
          </Button>
        </div>
      <div className="container bg-color-primary-80 rounded-4  pb-5 box-shadow-lg">
        <Col sm={12} xl={11} className="mx-auto">
          <Row>
            <Col md={6} lg={4} className="mt-4 mt-md-5">
              <span className="text-color-white fs-24">SHREE</span>
              <p className="fs-14 text-color-white-80 mt-2 mt-md-3">
                51, Silver Stone Arcade, Sudama chowk, Mota Varachha, Surat,
                Gujarat 394101
              </p>
              <a href={`tel:${mobile}`}>
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
                <li className="text-color-white fs-14">Home</li>
                <li className="text-color-white fs-14">About Us</li>
                <li className="text-color-white fs-14">Product</li>
              </ul>
            </Col>
            <Col md={6} lg={2} className="mt-4 mt-md-5">
              <h4 className="text-color-white fs-20 fw-bold ff-primary">
                Products
              </h4>
              <ul className="p-0 m-0 mt-3 mt-lg-4 d-flex flex-column gap-2">
                <li className="text-color-white fs-14">Surgical Disposable</li>
                <li className="text-color-white fs-14">Coco High Beverages</li>
                <li className="text-color-white fs-14">Gems & Jewelry</li>
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
    </footer>
  );
};

export default Footer;
