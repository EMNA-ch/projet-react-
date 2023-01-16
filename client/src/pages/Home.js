import React from "react";
import bg from "../assets/images/bg.png";
import restaurant from "../assets/images/restaurant.png";
import hotel from "../assets/images/hotel.png";
import disco from "../assets/images/disco.png";

import NavBar from "../components/NavBar";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="vh-100 bg-body-tertiary">
        <div className="container h-100 d-flex flex-column">
          <NavBar color="white" />
          <div className="flex-grow-1 row align-items-center">
            <div className="col-md-6">
              <img src={bg} alt="bg" />
            </div>
            <div
              className="col-md-6 d-flex flex-column align-items-start lh-lg"
              style={{ gap: "40px" }}
            >
              <NavLink to="/posts">
                <div className="btn btn-outline-danger">View Stories</div>
              </NavLink>
              <div>
                <h1>Let's Share Your Trip With Others</h1>
                <p>
                  Thinking of taking a break from every day's busy life? Planing
                  to go out of the country with your loved ones to have some fun
                  and quality time in a cost-effective way?
                  <br /> Want to share your experience ?
                </p>
              </div>
              <Link to="/register" className="btn btn-primary">
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="vh-100" style={{ marginTop: "50px" }}>
        <div className="container text-center mb-3">
          <div className="row">
            <div className="col btn shadow-lg p-3 bg-body-tertiary rounded m-2">
              <img src={restaurant} width={250} height={215} alt="restaurant" />
              <h4 className="p-3">Restaurant</h4>
            </div>
            <div className="col btn shadow-lg p-3 bg-body-tertiary rounded m-2">
              <img src={hotel} width={250} height={215} alt="hotel" />
              <h4 className="p-3">Hotel</h4>
            </div>
            <div className="col btn shadow-lg p-3 bg-body-tertiary rounded m-2">
              <img src={disco} width={250} height={215} alt="disco" />
              <h4 className="p-3">Disco</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
