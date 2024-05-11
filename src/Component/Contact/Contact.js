import React from "react";
import "./Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
// import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("Please enter your name"),
      from_email: Yup.string().required("Please enter your email"),
      message: Yup.string().required("Please type any message"),
    }),
    onSubmit: (values) => {
      // emailjs.sendForm("service_795whqj", "template_s73oh7w", values, {
      //     publicKey: "6NUgEXRMJoc57g9Jc",
      //   })
      //   .then(
      //     () => {
      //       toast.success("Your message is send successfully");
      //       formik.resetForm();
      //     },
      //     (error) => {
      //       toast.error("Something went wrong. Please try again");
      //     }
      //   );
    },
  });
  return (
    <main id="contact">
      <div className="main-part mb-3">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-center fw-bold mt-5">Contact with me</h2>
          <div className="d-flex justify-content-center mt-4">
            <form className="contact-form" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="from_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.from_name}
                />
                {formik.touched.from_name && formik.errors.from_name ? (
                  <div className="text-danger mt-2">
                    {formik.errors.from_name}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="from_email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.from_email}
                />
                {formik.touched.from_email && formik.errors.from_email ? (
                  <div className="text-danger mt-2">
                    {formik.errors.from_email}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="descriptionInput" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descriptionInput"
                  aria-describedby="emailHelp"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-danger mt-2">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn btn-outline-secondary fw-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default Contact;
