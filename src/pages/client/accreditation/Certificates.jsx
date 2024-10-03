import React from "react";
import { Col, Row } from "react-bootstrap";

const Certificates = () => {
  const data = [
    "https://printabletemplates.com/wp-content/uploads/2017/12/certificate-of-authenticity-13-580x410.jpg",
    "https://lh4.googleusercontent.com/proxy/tNNCL_XOECfowo8dgVYbAvGVhm-bpMk3huP3BxvTgYP-5FwEiZsVilR6IyQaWge005Ay8UqnFl070mRXxd-E3adlSP1RkggaFZtbZco1kUyj65k=w1200-h630-p-k-no-nu",
    "https://i.pinimg.com/originals/13/cb/6e/13cb6e708b568328358ddc3d9181afb1.jpg",
  ];

  return (
    <section>
      <div className="container paddingTop-56 paddingBottom">
        <Row className="justify-content-center">
          {data.map((item,index) => {
            return (
              <Col xs={12} sm={6} md={4} className="mt-4" key={index}>
                <img src={item} className="w-100 h-100 object-fit-cover rounded-3" alt="" />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Certificates;
