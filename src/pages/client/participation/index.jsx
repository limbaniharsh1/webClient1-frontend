import React, { useState } from "react";
import Banner from "../../../components/client/Banner";
import { Button, Col, Row } from "react-bootstrap";

const index = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter options for countries
  const filterOptions = ["All", "Singapore", "Japan", "India"];

  // Images with corresponding country labels
  const images = [
    {
      id: 1,
      label: "Singapore",
      url: "https://demo.casethemes.net/consultio/wp-content/uploads/2019/12/award-03.jpg",
    },
    {
      id: 2,
      label: "Japan",
      url: "https://www.liverpoollep.org/wp-content/uploads/2019/06/Wirral-Business-Awards.jpg",
    },
    {
      id: 3,
      label: "India",
      url: "https://img.zr.ru/_ah/img/7SEdSN9wl77xsmwIzyEFRg",
    },
    {
      id: 4,
      label: "Japan",
      url: "https://avatars.mds.yandex.net/i?id=7544687fba8edcac425b0dbe9bfe7197_l-5327796-images-thumbs&ref=rim&n=13&w=3000&h=2000",
    },
    {
      id: 5,
      label: "India",
      url: "https://seahomer.ru/sites/default/files/styles/max_1300x1300/public/2018-10/elitgroup_team.jpg?itok=GD7NwkMv",
    },
  ];

  // Handle filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Filter images based on selected filter
  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((image) => image.label === selectedFilter);

  return (
    <div>
      <Banner title="TRADE FAIR PARTICIPATION" />
      <section>
        <div className="container pt-4 pt-md-5 paddingBottom responsive">
          {/* Render filter buttons */}
          <div className="d-flex gap-3 gap-md-4 flex-wrap justify-content-center">
            {filterOptions.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleFilterChange(item)}
                className={`${
                  selectedFilter === item
                    ? "bg-color-primary text-color-white hover-bg-primary"
                    : "bg-transparent text-color-primary  hover-text-primary"
                } border border-color-primary fs-14 px-4 rounded-4 py-1`}
              >
                {item}
              </Button>
            ))}
          </div>

          {/* Render filtered images */}
          <Row className="justify-content-center">
            {filteredImages.map((item, index) => (
              <Col xs={12} sm={6} md={4} className="mt-4 mt-md-5" key={item.id}>
                <img
                  src={item.url}
                  className="w-100 h-100 object-fit-cover rounded-3"
                  alt={item.label}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default index;
