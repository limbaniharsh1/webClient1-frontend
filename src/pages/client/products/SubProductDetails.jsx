import React from "react";
import { Table } from "react-bootstrap";
import { contentConstsnts } from "../../../constsnts/productConstants";

const SubProductDetails = ({ product }) => {
  const img = product?.img;
  const title = product?.title;
  const subTitle = product?.subTitle;
  const description = product?.description;
  const productContent = product?.productContent || [];
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
      <section className="paddingY ">
        <div className="container">
          <h3
            className="fs-34 fw-bold  ff-primary mb-3 mb-md-4 text-center"
            data-aos="fade-up"
          >
            {subTitle}
          </h3>
          <p className="fs-16 text-color-gray" data-aos="fade-up">
            {description}
          </p>

          {productContent?.length ? (
            <div>
              {productContent?.map((item, index) => {
                const type = item?.type;
                const data = item?.data;
                if (data?.length && type == contentConstsnts.CONTENT) {
                  return (
                    <div className="mt-5 mt-md-100px" key={index}>
                      {" "}
                      {data?.map((item, index) => {
                        const title = item?.title;
                        const description = item?.description;
                        return (
                          <div key={index}>
                            {title && (
                              <h4
                                className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start"
                                data-aos="fade-up"
                              >
                                {title}
                              </h4>
                            )}
                            <p className="fs-16 text-color-gray">
                              {description}
                            </p>
                          </div>
                        );
                      })}{" "}
                    </div>
                  );
                } else if (
                  data?.length &&
                  type == contentConstsnts.SPECIFICATIONS
                ) {
                  return (
                    <div className="mt-5 mt-md-100px" key={index}>
                      <h4
                        className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start"
                        data-aos="fade-up"
                      >
                        Specifications
                      </h4>
                      <Table>
                        <tbody>
                          {data?.map((item, index) => {
                            const title = item?.title;
                            const value = item?.value;
                            return (
                              <tr key={index}>
                                <td className="text-start border fs-16 fw-medium">
                                  {title}
                                </td>
                                <td className="text-start border text-color-gray">
                                  {value}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  );
                } else if (
                  data?.length &&
                  type == contentConstsnts.INGREDIENTS
                ) {
                  return (
                    <div className="mt-5 mt-md-100px" key={index}>
                      <h4
                        className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start"
                        data-aos="fade-up"
                      >
                        Ingredients
                      </h4>
                      <Table>
                        <tbody>
                          {data?.map((item, index) => {
                            const title = item?.title;
                            const values = item?.values;
                            return (
                              <tr key={index}>
                                <td className="text-start border fs-16 fw-medium">
                                  {title}
                                </td>
                                <td className="text-start border text-color-gray">
                                  {values?.map((item, index) => {
                                    return (
                                      <span className="d-block" key={index}>
                                        {item}
                                      </span>
                                    );
                                  })}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  );
                }
              })}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default SubProductDetails;
