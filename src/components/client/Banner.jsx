import React from "react";

const Banner = ({ title }) => {
  return (
    <section>
      <div className="common-bg d-flex align-items-center text-center">
        <div className="container">
          <h2 className="ff-primary fs-48 fw-bold mb-2 mb-md-3 main-banner-title text-color-white text-uppercase">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
