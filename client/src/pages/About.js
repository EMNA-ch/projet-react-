import React from "react";
import NavBar from "../components/NavBar";
import about from "../assets/images/about.jpg";

const About = () => {
  return (
    <div>
      <section>
        <div className="container vh-100 d-flex flex-column">
          <NavBar color="white" />
          <section className="flex-grow-1 row justify-content-center align-items-center mt-5">
            <div className="row w-100">
              <div className="col-md-6">
                <img
                  src={about}
                  alt="login"
                  className="shadow-lg p-4 bg-body-tertiary rounded"
                  style={{ width: "650px", height: "650px" }}
                />
              </div>
              <div className="col-md-6 shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                <h1 style={{ color: "#fc7d67" }}>Know more about our blog </h1>
                <h5>
                  TripStory is a blog about travel experiences, every one can
                  belong our team and share his good plans to help others making
                  their future trips
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

export default About;
