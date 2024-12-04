import Lottie from "lottie-react";
import { Col, Row } from "react-bootstrap";
import teamAnimation from "../../../assets/lottieFiles/team2.json";

const OurWorkSection = () => {
  return (
    <section className="">
      <div className="container paddingTop-56 paddingBottom">
        <Row className="align-items-center">
          <Col
            sm={12}
            md={7}
            xl={6}
            className="mt-4 responsive order-2 order-md-1"
          >
            <div className="px-lg-5">
              <h3
                className="fs-26 fw-bold  ff-primary mb-3 mb-md-4"
                data-aos="fade-up"
              >
                Our Mission
              </h3>
              <p className="mb-2 fs-16 fw-semibold" data-aos="fade-up">
                Committed to Quality and Sustainability
              </p>
              <p className="fs-16 text-color-gray" data-aos="fade-up">
                Our mission is to bridge global markets by providing seamless
                export solutions, ensuring the efficient and reliable movement
                of goods across borders. We are committed to delivering
                exceptional service, fostering long-term partnerships, and
                supporting businesses with customized logistics strategies. By
                embracing innovation, sustainability, and integrity, we strive
                to expand opportunities for both our clients and suppliers,
                helping them grow in a competitive international marketplace.
              </p>
            </div>
          </Col>
          <Col
            sm={9}
            md={5}
            lg={5}
            className="mt-4 ms-auto me-auto me-md-0 ms-md-auto order-1 order-ms-2"
          >
            <Lottie animationData={teamAnimation} loop={false} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurWorkSection;
