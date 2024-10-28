import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productData } from "../../../data/productsData";

const Products = () => {
  return (
    <section className="paddingTop paddingBottom-56 container">
      <h3
        className="fs-28 ff-primary mb-3 mb-md-4 fw-bold text-center"
        //    data-aos="fade-up"
      >
        Popular Products
      </h3>
      <Row>
        {productData?.map((item, index) => {
          const img = item?.img;
          const title = item?.title;
          const path = item?.path;
          return (
            <Col xs={12} sm={6} md={4} xl={3} key={index} className="mb-4">
              <div className="bg-color-white p-3 box-shadow-lg rounded-4 w-100 hover-card-translate">
                <Link to={path}>
                  <img
                    className="w-100 aspect-card-img rounded-4 object-fit-cover"
                    src={img}
                    alt=""
                  />
                  <h6 className="p-0 m-0 text-capitalize fs-18 fw-semibold mt-3 text-color-primary">
                    {title}
                  </h6>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Products;
