import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions/postActions";

const CommentForm = ({ postId, authorID }) => {
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
    <div className="container">
      <form>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <textarea
            placeholder="write a note..."
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <i
            className="bi bi-pencil-square btn btn-outline-info mx-2"
            onClick={handleComment}
          ></i>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
