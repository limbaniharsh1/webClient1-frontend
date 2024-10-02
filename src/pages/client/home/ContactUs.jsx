import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <section>
      <div className="container paddingY responsive">
        <h5 className="fs-28 fw-bold text-center ff-primary">
          Share Your Requirement
        </h5>
        <Form className="max-w-600px mx-auto box-shadow-lg p-4 rounded-4 mt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone no.</Form.Label>
            <Form.Control type="number" placeholder="Enter phone no." className="no-spinners" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" className="no-resize" placeholder="Start message from here..." rows={3} />
          </Form.Group>
          <Button className="primary-btn w-100 fs-16">Submit</Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactUs;
