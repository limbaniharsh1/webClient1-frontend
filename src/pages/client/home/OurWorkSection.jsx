import Lottie from "lottie-react";
import { Col, Row } from "react-bootstrap";
import teamAnimation from "../../../assets/lottieFiles/team2.json";

const OurWorkSection = () => {
  return (
    <section className="">
      <div className="container paddingTop-56 paddingBottom">
        <Row className="align-items-center">
          <Col sm={12} md={7} xl={6} className="mt-4 responsive order-2 order-md-1">
            <div className="px-lg-5">
              <h3 className="fs-26 fw-bold  ff-primary mb-3 mb-md-4" data-aos="fade-up">
                About Shree International
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
          <Col sm={9} md={5} lg={5} className="mt-4 ms-auto me-auto me-md-0 ms-md-auto order-1 order-ms-2" >
            <Lottie animationData={teamAnimation} loop={false} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurWorkSection;
