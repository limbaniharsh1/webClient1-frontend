import React from "react";
import { Table } from "react-bootstrap";
import { contentConstsnts } from "../../../constants/productConstants";

const SubProductDetails = ({ product }) => {
  const img = product?.img;
  const title = product?.title;
  const subTitle = product?.subTitle;
  const description = product?.description;
  const descriptions = product?.descriptions || [];
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
        <div className="">
          <div className="container">
            <h3 className="fs-34 fw-bold  ff-primary mb-3 mb-md-4 text-center text-capitalize">
              {subTitle}
            </h3>
            <p className="fs-16 text-color-gray">{description}</p>
            {descriptions?.length > 0 &&
              descriptions?.map((item, index) => {
                return (
                  <p key={index} className="fs-16 text-color-gray">
                    {item}
                  </p>
                );
              })}
          </div>

          {productContent?.length ? (
            <div>
              {productContent?.map((item, index) => {
                const type = item?.type;
                const data = item?.data;
                if (data?.length && type == contentConstsnts.CONTENT) {
                  return (
                    <div className="mt-5 mt-md-100px container" key={index}>
                      {" "}
                      {data?.map((item, index) => {
                        const title = item?.title;
                        const description = item?.description;
                        return (
                          <div key={index}>
                            {title && (
                              <h4 className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start">
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
                    <div className="mt-5 mt-md-100px container" key={index}>
                      <h4 className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start">
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
                    <div className="mt-5 mt-md-100px container" key={index}>
                      <h4 className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start">
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
                } else if (type == contentConstsnts.VARIETIES) {
                  const title = item?.title;
                  const description = item?.description;
                  const data = item?.data;
                  return (
                    <div className="mt-5 mt-md-100px bg-color-primary">
                      <div key={index} className="container paddingY">
                        <h4 className="fs-24 fw-bold text-uppercase ff-primary text-white mb-3 mb-md-4 text-start text-center">
                          {title}
                        </h4>
                        <p className="text-color-white-80">{description}</p>
                        <ul className="p-0 m-0 d-flex  flex-column gap-4 gap-sm-5 mt-5 maginTop-md">
                          {data?.map((item, index) => {
                            const title = item?.title;
                            const description = item?.description;
                            return (
                              <li key={index} className="d-flex gap-4 gap-sm-5">
                                <span className="bg-white d-block varieties-number-box fs-24 fw-bold rounded-3 d-flex align-items-center justify-content-center">
                                  {index + 1}
                                </span>
                                <div>
                                  <h5 className="text-color-white fw-semibold">
                                    {title}
                                  </h5>
                                  <p className="text-color-white-80">
                                    {description}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                } else if (type == contentConstsnts.USES_AND_BENEFITS) {
                  return (
                    <div key={index} className="container mt-5 mt-md-100px">
                      <h4 className="fs-24 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start">
                        Uses & Benefits
                      </h4>

                      {item?.data?.map((item, index) => {
                        if (
                          item?.type ==
                            contentConstsnts.USES_AND_BENEFITS.USES ||
                          item?.type ==
                            contentConstsnts.USES_AND_BENEFITS.BENEFITS
                        ) {
                          return (
                            <div key={index} className="ms-3 ms-md-4 mt-5">
                              <h4 className="fs-18 fw-bold text-uppercase ff-primary mb-3 mb-md-4 text-start">
                                {item?.type ==
                                contentConstsnts.USES_AND_BENEFITS.USES
                                  ? "Uses:"
                                  : "Benefits:"}
                              </h4>
                              <ul className="m-0 p-0">
                                {item?.data?.map((item, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="d-flex gap-3 mb-4 mb-md-2"
                                    >
                                      <i className="ri-arrow-right-circle-line fs-20"></i>

                                      {item}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        } else if (
                          item?.type ==
                          contentConstsnts.USES_AND_BENEFITS.BENEFITS
                        ) {
                          <ul key={index}>
                            {item?.data?.map((item, index) => {
                              return <li key={index}>{item}</li>;
                            })}
                          </ul>;
                        }
                      })}
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
