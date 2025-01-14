import React from "react";
import { Col, Row } from "react-bootstrap";

const Team = () => {
  const data = [
    {
      img: "/images/1.png",
      name: "Rutvik kachhadiya",
      position: "CEO",
      description:
        "With a deep understanding of international trade dynamics, they have positioned the company as a leader in the disposable products industry.",
    },
    {
      img: "/images/2.jpg",
      name: "Rutvik kahodariya",
      position: "CEO",
      description:
        "From sourcing premium-quality products to ensuring timely global delivery, their focus on efficiency and precision guarantees an exceptional customer experience.",
    },
    {
      img: "/images/3.png",
      name: "Manoj lukhi",
      position: "CEO",
      description:
        " Under their leadership, the company has prioritized eco-friendly products and sustainable practices, making a significant contribution to reducing the global environmental footprint",
    },
    {
      img: "/images/4.png",
      name: "Shivam kasvala",
      position: "CEO",
      description:
        "Their commitment to understanding and exceeding customer expectations drives Shreevarni Export to continuously evolve and deliver personalized solutions for businesses worldwide.",
    },
  ];

  return (
    <section className="bg-lightest-gray">
      <div className="container paddingY responsive overflow-hidden">
        <h4
          className="text-center fs-28 ff-primary fw-bold mb-3"
          data-aos="fade-up"
        >
          Meet Our Leadership Team
        </h4>
        <p
          className="max-w-800px text-center mx-auto text-color-gray fs-16 truncate-line-3"
          data-aos="fade-up"
        >
          Our expert team powers our import-export success, delivering
          exceptional service and innovative solutions in global trade,
          logistics, and finance. Meet the people behind it all!
        </p>
        <div className="">
          <Row>
            {data.map((item, index) => {
              const img = item.img;
              const name = item.name;
              const position = item.position;
              const description = item.description;

              return (
                <Col sm={6} xl={3} key={index} className="mt-4">
                  <div className="" data-aos="fade-left">
                    <div className="team-profile-img box-shadow-lg p-4">
                      <img
                        src={img}
                        className="mx-auto d-block position-relative z-1"
                        alt=""
                      />
                      <div className="text-center mt-4 position-relative z-1">
                        <h4 className="fs-20 text-color-primary fw-bold mb-0 transition-color">
                          {name}
                        </h4>
                        <span className="fs-16 text-color-secondary">
                          {position}
                        </span>
                        <p className="fs-16 text-color-gray mt-2 transition-color truncate-line-4">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Team;
