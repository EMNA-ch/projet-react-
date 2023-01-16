import React from "react";

const Footer = () => {
  return (
    <div className="card container border border-light mt-5">
      <footer class="footer-16371">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 text-center">
              <div class="footer-site-logo mb-4">
                <a href="/">TripStory</a>
              </div>
              <ul class="list-unstyled nav-links mb-5">
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
              </ul>

              <div class="copyright">
                <p class="mb-0">
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
