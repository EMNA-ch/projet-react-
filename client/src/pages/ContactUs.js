import React from "react";
import NavBar from "../components/NavBar";
import contact from "../assets/images/contact.jpg";

const ContactUs = () => {
  return (
    <div>
      <section>
        <div className="container vh-100 d-flex flex-column">
          <NavBar color="white" />
          <section className="flex-grow-1 row justify-content-center align-items-center mt-5">
            <div className="row w-100">
              <div className="col-md-6">
                <img
                  src={contact}
                  alt="login"
                  className="shadow-lg p-4 bg-body-tertiary rounded"
                  style={{ width: "650px", height: "650px" }}
                />
              </div>
              <div className="col-md-6 shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                <h1 style={{ color: "#fc7d67" }}>Got in touch with us </h1>
                <h1 style={{ color: "#294665" }}>Send an Email to </h1>
                <h5>tripstory.contact@gmail.com</h5>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
