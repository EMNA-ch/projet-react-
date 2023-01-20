import React from "react";
import locations from "../assets/images/cloudinaryImages/imageUrl";
import CardStory from "./CardStory";

const StoryCard = ({ index, post, places }) => {
  // console.log("places", places);
  return (
    <div className="row mb-1">
      {!(index % 2) ? (
        <div className="col img-border py-3 d-flex flex-column justify-content-center align-items-center">
          <img
            className="shadow p-3 mb-5 bg-body-tertiary"
            src={post?.image?.url}
            width={300}
            height={300}
            alt="..."
          />
        </div>
      ) : (
        <div className="col img-border py-3 d-flex flex-column justify-content-center">
          <CardStory post={post} />
        </div>
      )}
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
      {!(index % 2) ? (
        <div className="col img-border py-3 d-flex flex-column justify-content-center">
          <CardStory post={post} />
        </div>
      ) : (
        <div className="col img-border py-3 d-flex flex-column justify-content-center align-items-center">
          <img
            className="shadow p-3 mb-5 bg-body-tertiary "
            src={post.image.url}
            width={300}
            height={300}
            alt="..."
          />
        </div>
      )}
    </div>
  );
};

export default StoryCard;
