import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const BannerSection = () => {
  return (
    <section className="bg-img-main-banner p-4 vh-85 d-flex align-items-center">
      <div className="container">
        <Row className="align-items-center">
          <Col>
            <span className=" letter-spacing-1_5 fs-14 fw-medium text-color-primary d-block mb-2 ">
              SHREE INTERNATIONAL
            </span>
            <h2 className="ff-primary fs-48 fw-bold mb-3">
              Expanding Horizons <br /> Through Global{" "}
              <span className="text-color-secondary"> Trade </span>
            </h2>
            <p className="fs-14">
              Our import-export business specializes in managing global supply
              chains, ensuring that your products reach their destination on
              time and within budget.
            </p>
            <div className="mt-5 d-flex gap-3">
              <Button className="primary-btn fs-16 fw-bold">
                Get started <i className="ms-1 ri-arrow-right-line"></i>
              </Button>
              <Button className="white-btn fs-16 fw-bold text-color-primary">
                Let's Talk With Us <i className="ms-1 ri-arrow-right-line"></i>
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <img
              className="h-100 w-100 rounded-5 up-down-animation"
              src="https://www.bpcoachtrain.com/wp-content/uploads/2016/12/Millennials-not-afraid-to-speak-up.jpg"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BannerSection;
