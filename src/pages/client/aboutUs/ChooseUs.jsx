import React from "react";
import { Col, Row } from "react-bootstrap";

const ChooseUs = () => {
  const data = [
    "Up-to-date infrastructure",
    "Durable product range",
    "Highly experienced professionals",
    "Complete client satisfaction",
    "Ethical business practices",
    "Transparent dealings",
    "Timely delivery",
  ];

  return (
    <section className="bg-lightest-gray paddingY responsive">
      <div className="container">
        <h3
          className="fs-26 ff-primary mb-3 mb-md-4 fw-bold text-center"
          data-aos="fade-up"
        >
          Why Choose Us
        </h3>
        <p
          className="mb-2 fs-16 fw-medium text-center max-w-600px mx-auto"
          data-aos="fade-up"
        >
          We are vastly appreciated in the market due to our offered highly
          reliable and durable range of products in several specifications at
          most judicious rates.
        </p>
        <Row className="mt-3 mt-md-5">
          <Col xs={12} md={6} className="mt-4">
            <span className="fs-24 ff-primary d-block mb-4 fw-bold">
              Some of the attributes that make us the most suitable choice of
              our clients are:
            </span>
            <ul className="p-0 m-0 d-flex flex-column gap-2">
              {data.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="fs-14 d-flex align-items-center gap-3"
                  >
                    <i class="ri-arrow-right-circle-fill fs-18"></i>
                    {item}
                  </li>
                  //   <li
                  //     key={index}
                  //     className="bg-white p-3 rounded-3 fs-14 d-flex align-items-center gap-3"
                  //   >
                  //     <i class="ri-arrow-right-circle-fill fs-18"></i>
                  //     {item}
                  //   </li>
                );
              })}
            </ul>
          </Col>
          <Col xs={12} md={6} className="mt-4">
            <div className="d-flex flex-column gap-4">
              <div className="text-center box-shadow-lg p-4 rounded-4">
                <i className="ri-user-2-fill fs-34"></i>
                <h6 className="fs-18 fw-bold mb-1 text-color-primary">
                  Highly experienced professionals
                </h6>
              </div>
              <div className="text-center box-shadow-lg p-4 rounded-4">
                <i className="ri-home-5-fill fs-34"></i>
                <h6 className="fs-18 fw-bold mb-1 text-color-primary">
                  Ethical business practices
                </h6>
              </div>
              <div className="text-center box-shadow-lg p-4 rounded-4">
                <i className="ri-timer-fill fs-34"></i>
                <h6 className="fs-18 fw-bold mb-1 text-color-primary">
                  Timely delivery
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ChooseUs;
