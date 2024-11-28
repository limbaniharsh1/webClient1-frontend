import Lottie from "lottie-react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import teamAnimation from "../../../assets/lottieFiles/team.json";

const AboutSection = () => {
  return (
    <section className="">
      <div className="container paddingTop-56 paddingBottom">
        <Row className="align-items-center">
          <Col sm={10} md={6} className="mt-4 mx-auto" data-aos="zoom-in">
            <Lottie animationData={teamAnimation} loop={true} />
          </Col>
          <Col sm={12} md={6} className="mt-4 responsive">
            <div className="px-lg-5">
              <h3
                className="fs-28 ff-primary mb-3 mb-md-4 fw-bold"
                data-aos="fade-up"
              >
                About Shreevarni Export
              </h3>
              <p className="mb-2 fs-16 fw-semibold" data-aos="fade-up">
                Insights and Resources to help drive your Business Forward
                Faster.
              </p>
              <p className="fs-16 text-color-gray" data-aos="fade-up">
                We build results-oriented brand strategy and continually refine
                the campaign for the greatest outcome. From full scale branding
                strategy, we are reaching to almost desired buyers throughout
                the world. Greatest Indian products have to be present globally
                and that is our vision of hard work.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
