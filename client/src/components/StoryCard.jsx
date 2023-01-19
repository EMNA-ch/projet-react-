import React from "react";
import locations from "../assets/images/cloudinaryImages/imageUrl";

const StoryCard = ({ index, post, places }) => {
  return (
    <div className="row mb-1">
      <div className="col img-border py-3">
        {!(index % 2) ? (
          <img
            className="shadow p-3 mb-5 bg-body-tertiary"
            src={post?.image?.url}
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
                  <strong>{post?.description}</strong>
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
        <img
          src={locations()[Math.floor(Math.random() * locations().length)]}
          alt="..."
        />
        <div
          className="h-100"
          style={index !== places?.length ? { border: "2px dashed" } : {}}
        ></div>
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
                  <strong>{post?.description}</strong>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <img
            className="shadow p-3 mb-5 bg-body-tertiary "
            src={post.image.url}
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
