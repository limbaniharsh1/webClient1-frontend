import React from "react";
import { Col, Row } from "react-bootstrap";

const Team = () => {
  const data = [
    {
      img: "https://avatars.mds.yandex.net/i?id=e36e4545bb97ec46e2e5e222f9ae7b93dfad2929-3905844-images-thumbs&n=13",
      name: "John doe",
      position: "CEO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=e36e4545bb97ec46e2e5e222f9ae7b93dfad2929-3905844-images-thumbs&n=13",
      name: "John doe",
      position: "CEO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=e36e4545bb97ec46e2e5e222f9ae7b93dfad2929-3905844-images-thumbs&n=13",
      name: "John doe",
      position: "CEO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=e36e4545bb97ec46e2e5e222f9ae7b93dfad2929-3905844-images-thumbs&n=13",
      name: "John doe",
      position: "CEO",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <section>
      <div className="container paddingBottom responsive">
        <h4 className="text-center">Meet Our Leadership Team</h4>
        <p className="max-w-800px text-center mx-auto text-color-gray fs-14 truncate-line-3">
          Our expert team powers our import-export success, delivering
          exceptional service and innovative solutions in global trade,
          logistics, and finance. Meet the people behind it all!
        </p>
        <div>
          <Row>
            {data.map((item, index) => {
              const img = item.img;
              const name = item.name;
              const position = item.position;
              const description = item.description;

              return (
                <Col sm={6} xl={3} key={index} className="mt-4">
                  <div>
                    <div className="team-profile-img box-shadow-lg p-4">
                      <img
                        src={img}
                        className="mx-auto d-block position-relative z-1"
                        alt=""
                      />
                    <div className="text-center mt-4 position-relative z-1">
                      <h4 className="fs-20 text-color-primary fw-semibold mb-0 transition-color">{name}</h4>
                      <span className="fs-14 text-color-secondary">{position}</span>
                      <p className="fs-14 text-color-gray mt-2 transition-color">{description}</p>
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
