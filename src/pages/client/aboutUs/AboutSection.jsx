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
                className="fs-26 ff-primary mb-3 mb-md-4 fw-bold"
                data-aos="fade-up"
              >
                About Shree International
              </h3>
              <p className="mb-2 fs-16 fw-medium" data-aos="fade-up">
                Insights and Resources to help drive your Business Forward
                Faster.
              </p>
              <p className="fs-14 text-color-gray" data-aos="fade-up">
                Established in the year 2014 at Surat (Gujarat, India), we
                “Atlantico International” are a Sole Proprietorship firm
                recognized as the noteworthy manufacturer and trader of an
                exclusive range of Shoe Cover, Face Mask, Surgeon Cap, Surgical
                Disposables Items, Chocolate drink, Milk beverages and Moringa
                products. We offer these products in diverse specifications in
                order to meet the variegated needs of our clients. Under the
                guidance of mentor “Mr. Amit Mulani”, we have been able to
                provide utmost satisfaction to our esteemed clients.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
