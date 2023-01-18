import React from "react";

const Footer = () => {
  return (
    <div className="card container border border-light mt-5">
      <footer className="footer-16371">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              {/* <div className="footer-site-logo mb-4">
                <a href="/">TripStory</a>
              </div>
              <ul className="list-unstyled nav-links mb-5">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/posts">Posts</a>
                </li>
                <li>
                  <a href="/contactus">ContactUs</a>
                </li>
                <li>
                  <a href="/fqa">FQA</a>
                </li>
              </ul> */}

              <div className="copyright">
                <p className="mb-0">
                  <small>© TripStory. All Rights Reserved.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
