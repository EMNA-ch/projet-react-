import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";
import { VerifyLogin } from "./redux/actions/verifyLogin";
import VisitedProfile from "./pages/VisitedProfile";
import Story from "./pages/Story";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(VerifyLogin(token));
  }, [dispatch]);
  return (
    <div className="text-dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/visitProfile/:id" element={<VisitedProfile />} />
        <Route path="/posts/:id" element={<Story />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
