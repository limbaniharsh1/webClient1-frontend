import React from "react";
import Banner from "../../../components/client/Banner";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { email, mobile } from "../../../enum";
import { postContactThunk } from "../../../store/contact/thunk";
import { toast } from "react-toastify";

const index = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.contact);

  // Formik setup with validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone is required")
        .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Add the submit logic here (e.g., send to backend)
      const response = await dispatch(postContactThunk(values));
      if (postContactThunk.fulfilled.match(response)) {
        toast.success("Thanks for contacting us");
        resetForm();
      }
    },
  });

  return (
    <div>
      <Banner title="contact us" />
      <div className="container paddingY responsive">
        <h5 className="fs-28 fw-bold text-center ff-primary">
          Share Your Requirement
        </h5>
        <Row>
          <Col xs={12} md={6}>
            <Form
              onSubmit={formik.handleSubmit}
              className="max-w-600px mx-auto box-shadow-lg p-4 rounded-4 mt-4"
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-danger fs-12 fw-medium">
                    {formik.errors.name}
                  </span>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-danger fs-12 fw-medium">
                    {formik.errors.email}
                  </span>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone no.</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter phone no."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  isInvalid={formik.touched.phone && formik.errors.phone}
                  className="no-spinners"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <span className="text-danger fs-12 fw-medium">
                    {formik.errors.phone}
                  </span>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Start message from here..."
                  rows={3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  isInvalid={formik.touched.message && formik.errors.message}
                  className="no-resize"
                />
                {formik.touched.message && formik.errors.message ? (
                  <span className="text-danger fs-12 fw-medium">
                    {formik.errors.message}
                  </span>
                ) : null}
              </Form.Group>

              <Button
                type="submit"
                className="primary-btn w-100 fs-16"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6} className="mt-4">
            <div className="d-flex flex-column gap-4">
              <div className="text-center box-shadow-lg p-4 rounded-4">
                <i className="ri-map-pin-2-fill fs-34"></i>
                <h6 className="fs-20 fw-bold mb-1 text-color-primary">
                  Location
                </h6>
                <p className="fs-16 text-color-gray p-0 m-0">
                216, Vnpm run devarni plaza, sudama chowk, mota varachha,surat
                </p>
              </div>
              <div className="text-center box-shadow-lg p-4 rounded-4">
                <i className="ri-phone-fill fs-34"></i>
                <h6 className="fs-20 fw-bold mb-1">Contact</h6>
                <a
                  href={"tel:" + mobile}
                  className="fs-16 text-color-gray p-0 m-0"
                >
                  +91 {mobile}
                </a>
              </div>
              <div className="text-center box-shadow-lg p-4 rounded-4">
                <i className="ri-mail-open-fill fs-34"></i>
                <h6 className="fs-20 fw-bold mb-1">Mail</h6>
                <a
                  href={"mailto:" + email}
                  className="fs-16 text-color-gray p-0 m-0"
                >
                  {email}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default index;
