import React from "react";
import location1 from "../assets/images/location1.png";
import sfax from "../assets/images/sfax.jpg";

const StoryCard = ({ index, post }) => {
  return (
    <div className="row mb-1">
      <div className="col img-border py-3">
        {!(index % 2) ? (
          <img
            className="shadow p-3 mb-5 bg-body-tertiary"
            src={sfax}
            width={300}
            height={300}
            alt="..."
          />
        ) : (
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button">
                  Descriptions
                </button>
              </h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong>
                  It is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
        <div
          className="h-100"
          style={index !== 0 ? { border: "2px dashed" } : {}}
        ></div>
        <img src={location1} alt="..." />
        <div className="h-100" style={{ border: "2px dashed" }}></div>
      </div>
      <div className="col img-border  py-3">
        {!(index % 2) ? (
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button">
                  Descriptions
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong>
                  It is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img
            className="shadow p-3 mb-5 bg-body-tertiary "
            src={sfax}
            width={300}
            height={300}
            alt="..."
          />
        )}
      </div>
    </div>
  );
};

export default StoryCard;
