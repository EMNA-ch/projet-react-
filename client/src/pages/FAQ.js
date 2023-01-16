import React from "react";
import NavBar from "../components/NavBar";
import faq from "../assets/images/faq.jpg";
const FAQ = () => {
  return (
    <div>
      <section>
        <div className="container vh-100 d-flex flex-column">
          <NavBar color="white" />
          <section className="flex-grow-1 row justify-content-center align-items-center mt-5">
            <div className="row w-100">
              <div className="col-md-6">
                <img
                  src={faq}
                  alt="login"
                  className="shadow-lg p-4 bg-body-tertiary rounded"
                  style={{ width: "650px", height: "650px" }}
                />
              </div>
              <div className="col-md-6 shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                <h1 style={{ color: "#fc7d67" }}>Got a Question ? </h1>
                <h1 style={{ color: "#294665" }}>Get your Answer ... </h1>
                <h5>
                  Curious about our blog, hope you will find here the most asked
                  questions and the responses{" "}
                </h5>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section
            className="shadow-lg bg-body-tertiary w-100"
            style={{
              display: "grid",
              justifyContent: " center",
              alignItems: "center",
              borderRadius: "20px",
            }}
          ></section>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
