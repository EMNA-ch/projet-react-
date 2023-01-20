import React from "react";

const CardStory = ({ post }) => {
  // console.log("post", post);
  return (
    <>
      <div className="input-group mb-3">
        <div
          className="card p-2 d-flex justify-conten-center bg-primary bg-opacity-50"
          id="button-addon1"
        >
          Place
        </div>
        <input
          type="text"
          className="form-control"
          value={post?.place || post?.location}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          disabled
        />
      </div>
      <div className="input-group mb-3">
        <div
          className="card p-2 d-flex justify-conten-center bg-primary bg-opacity-50"
          id="button-addon1"
        >
          Cost
        </div>
        <input
          type="text"
          className="form-control"
          value={post?.cost}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          disabled
        />
      </div>
      <div className="input-group mb-3">
        <div
          className="card p-2 d-flex justify-conten-center bg-primary bg-opacity-50"
          id="button-addon1"
        >
          Description
        </div>
        <input
          type="text"
          className="form-control"
          value={post?.description}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          disabled
        />
      </div>
    </>
  );
};

export default CardStory;
