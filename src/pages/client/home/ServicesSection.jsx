import React from "react";
import { Col, Row } from "react-bootstrap";

const ServicesSection = () => {
  const data = [
    {
      title: "Surgical Disposable",
      description:
        "Certified and authenticated medical disposable products supplements is our core value. Let’s connect for better health and smiling world.",
      icon: "ri-medicine-bottle-line",
    },
    {
      title: "Coco High Beverages",
      description:
        "Premium Melted Chocolate Drink. Have you ever drunk the chocolate? Here we are with melted chocolate in different flavors called CocoHigh",
      icon: "ri-drinks-line",
    },
    {
      title: "Gems & Jewelry",
      description:
        "Exquisite gems, timeless beauty, and authenticated craftsmanship define our core values.",
      icon: "ri-vip-diamond-line",
    },
  ];

  return (
    <section>
      <div className="container paddingBottom paddingTop-56">
        <Col sm={12} lg={10} className="mx-auto">
          <Row className="overflow-hidden">
            {data?.map((item, index) => {
              return (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  className="pt-4 responsive overflow-hidden"
                  data-aos="fade-left"
                >
                  <div className="box-shadow-lg rounded-3 p-4 banner-service-hover-card">
                    <span className="home-service-icon d-block rounded-3 text-color-white d-flex align-items-center justify-content-center text-start fs-28">
                      <i className={item.icon}></i>
                    </span>
                    <h3 className="fs-20 mt-4 ff-primary text-truncate text-color-primary">
                      {item.title}
                    </h3>
                    <p className="fs-14 truncate-line-3 text-color-gray">
                      {item.description}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </div>
    </section>
  );
};

export default ServicesSection;
