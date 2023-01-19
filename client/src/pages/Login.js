import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import loginPic from "../assets/images/login-pic.png";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("emna@gmail.com");
  const [password, setPassword] = useState("123456");
  const { errors, loading, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    dispatch(login(newUser)).then((user) => {
      if (user) {
        navigate(`/profile/${user.id}`);
      }
    });
  };
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : localStorage.getItem("token") ? (
        <Navigate to={`/profile/${user.id}`} />
      ) : (
        <section>
          {/* {loading ? (
          <h2>loading...</h2>
        ) : localStorage.getItem("token") ? (
          <Navigate to={`/profile/${user.id}`} />
        ) : ( */}
          <div className="container vh-100 ">
            <NavBar color="white" />
            <section className="row justify-content-center align-items-center mt-5">
              <div className="row w-100">
                <div className="col-md-6">
                  <img
                    src={loginPic}
                    alt="login"
                    className="shadow-lg p-4 bg-body-tertiary rounded"
                  />
                </div>
                <div className="col-md-6 shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                  <h1>Sing In</h1>
                  <h6 style={{ color: "red" }}> {errors?.msg}</h6>
                  <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="row mb-5 mx-4">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <h6 style={{ color: "red" }}>
                          {
                            errors?.errors?.find((el) => el.param === "email")
                              ?.msg
                          }
                        </h6>{" "}
                      </div>
                    </div>
                    <div className="row mb-3 mx-4">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-3 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword3"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <h6 style={{ color: "red" }}>
                          {
                            errors?.errors?.find(
                              (el) => el.param === "password"
                            )?.msg
                          }
                        </h6>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center mt-5"
                      style={{ gap: "20px" }}
                    >
                      <button type="submit" className="btn btn-primary">
                        Sing In
                      </button>
                      <Link to="/register" className="align-middle ">
                        Don't Have an Account?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
          {/* )} */}
        </section>
      )}
    </div>
  );
};

export default Login;
