import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
import { logout } from "../redux/actions/userActions";

const NavBar = ({ color }) => {
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
  };
  return (
    <nav
      className={`navbar text-center row ${
        color === "white" ? "" : "bg-body-tertiary"
      }`}
    >
      <div className="container">
        <div className="row w-100 d-flex justify-content-around align-items-center">
          <div className="col text-start">
            <Link to="/">
              <img src={logo} alt="Bootstrap" width="90" height="30" />
            </Link>
          </div>
          <div className="col-md-7 d-flex justify-content-around align-items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/contactus">ContactUs</NavLink>
            <NavLink to="/faq">FAQ </NavLink>
            {user && <NavLink to={`/profile/${user.id}`}>Profile </NavLink>}
          </div>
          <div className="col text-end">
            <NavLink to="/login" className="sign_in">
              {user ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={signOut}
                >
                  Sign out
                </button>
              ) : (
                <button type="button" className="btn btn-primary">
                  Sign in
                </button>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
