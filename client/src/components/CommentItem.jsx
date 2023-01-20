import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../redux/actions/postActions";
import avatar from "../assets/images/avatar.png";

const CommentItem = ({ comment, postId }) => {
  const { user } = useSelector((state) => state.userReducer);
  const { post, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(postId, comment._id));
  };
  return (
    <div className="p-1 mb-2 d-flex justify-content-between align-items-center mx-5 border border-grey rounded">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={avatar}
          className="rounded-circle border border-danger p-1"
          width={30}
          height={30}
          alt="..."
        />
        <div className="small fw-light mx-4 text-muted">{comment.text}</div>
      </div>
      {user?.id === post?.user?.id ? (
        <i
          className="bi bi-trash-fill text-danger"
          role="button"
          onClick={handleDelete}
        ></i>
      ) : user?.id === comment.user ? (
        <i
          className="bi bi-trash-fill text-danger"
          role="button"
          onClick={handleDelete}
        ></i>
      ) : null}
    </div>
  );
};

export default CommentItem;
