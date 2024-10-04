import Lottie from "lottie-react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import infrastructureAnimation from "../../../assets/lottieFiles/infrastructure.json";

const Infrastructure = () => {
  return (
    <section>
      <div className="container paddingTop-56 paddingBottom">
        <Row className="align-items-center">
          <Col sm={8} md={5} lg={4} className="mt-4 mx-auto" data-aos="zoom-in">
            <Lottie animationData={infrastructureAnimation} loop={true} />
          </Col>
          <Col sm={12} md={6} className="mt-4 responsive">
            <div className="px-lg-5">
              <h3
                className="fs-26 ff-primary mb-3 mb-md-4 fw-bold"
                data-aos="fade-up"
              >
                Our Infrastructure
              </h3>
              <p className="fs-14 text-color-gray" data-aos="fade-up">
                We are supported by an advanced infrastructure facility which
                spreads over a large area of land. In order to ensure smooth
                functioning, our unit is precisely segregated into various
                departments like manufacturing, R&D, quality testing,
                warehousing & packaging, logistics, etc. Our fully-furnished
                production department enables us to manufacture these products
                as per clients’ specific needs and requirements and deliver
                these within the promised time frame. Owing to our modern
                infrastructural facility, we have been successful in catering
                bulk & urgent orders of our clients.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Infrastructure;
