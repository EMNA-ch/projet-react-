import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../redux/actions/postActions";

const CommentItem = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(postId, comment._id));
  };
  return (
    <div>
      <div className="d-flex mx-4">
        <h2>{comment.name}</h2>
        <h4 className="mx-4">{comment.text}</h4>
        <button className="btn btn-outline-danger mx-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
