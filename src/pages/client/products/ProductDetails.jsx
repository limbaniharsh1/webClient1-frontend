import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const img = product?.img;
  const title = product?.title;
  const subTitle = product?.subTitle;
  const description = product?.description;
  const subProductData = product?.subProducts;

  return (
    <div className="responsive">
      <div
        className="common-bg d-flex align-items-center text-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container">
          <h2 className="ff-primary fs-48 fw-bold mb-2 mb-md-3 main-banner-title text-color-white text-uppercase">
            {title}
          </h2>
        </div>
      </div>
      <section className="paddingY text-center">
        <div className="container">
          <h3
            className="fs-34 fw-bold  ff-primary mb-3 mb-md-4"
            data-aos="fade-up"
          >
            {subTitle}
          </h3>
          <p className="fs-16 text-color-gray" data-aos="fade-up">
            {description}
          </p>
          {subProductData?.length ? (
            <div className="mt-4 mt-md-5">
              <Row>
                {subProductData?.map((item, index) => {
                  const img = item?.img;
                  const title = item?.title;
                  const path = item?.path;
                  return (
                    <Col xs={12} sm={6} md={4} xl={3} key={index}>
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
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
