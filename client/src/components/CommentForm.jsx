import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions/postActions";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    const newComment = {
      text,
    };
    dispatch(addComment(postId, newComment));
    setText("");
  };

  return (
    <div className="mb-3">
      <form>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Add Comment
        </label>
        <div className="d-flex">
          <textarea
            className="form-control w-50"
            id="exampleFormControlTextarea1"
            rows="1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button
            className="btn btn-outline-success mx-5"
            onClick={handleComment}
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
