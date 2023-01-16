import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sfax from "../assets/images/sfax.jpg";
import avatar from "../assets/images/avatar.png";
import { deletePost } from "../redux/actions/postActions";
import UpdateForm from "./UpdateForm";

const PostCard = ({ post, authorID }) => {
  const [show, setShow] = useState(false);
  const { user, token } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(post._id, token));
  };
  const isAuth = localStorage.getItem("token") && authorID === user?.id;

  const postTime = post.createdAt.slice(0, 10).split("-").reverse().join("-");
  return (
    <div className="card col shadow-lg p-3 btn bg-body-tertiary rounded m-2">
      <div className="card-header d-flex justify-content-between align-items-center bg-primary bg-opacity-25">
        {isAuth && (
          <i
            className="bi bi-trash-fill btn btn-outline-danger"
            role="button"
            onClick={handleDelete}
          ></i>
        )}
        <small>
          <Link to={`/visitProfile/${post.user.id}`}>
            <img
              src={avatar}
              className="rounded-circle border border-danger p-1"
              width={30}
              height={30}
              alt="..."
            />
          </Link>
          <small> @{post.user.name}</small>
        </small>
        {isAuth && (
          <i
            className="bi bi-pencil-fill btn btn-outline-success"
            role="button"
            onClick={handleShow}
          ></i>
        )}
      </div>
      <div className="card-title">{post.title}</div>
      <div className="card-body row">
        <div className="col-md-4">
          <img
            src={sfax}
            className="img-fluid circular--square--left"
            alt="..."
          />
          <div className="card-footer mt-3 bg-white">
            From: {post?.location}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body body">
            <p className="card-text">{post.description}</p>
            <div className="d-flex justify-content-center align-items-center"></div>
          </div>
        </div>

        <div className="col-md-4">
          {isAuth && (
            <div>
              <UpdateForm post={post} show={show} setShow={setShow} />
            </div>
          )}
          <img
            src={sfax}
            className="img-fluid circular--square--right "
            alt="..."
          />
          <div className="card-footer mt-3 bg-white">
            To: {post?.destination}
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-muted">{postTime}</small>
        <Link to={`/posts/${post._id}`}>
          <button className="btn btn-outline-info">
            Read more <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
        </Link>
        <small className="text-muted">X comments</small>
      </div>
    </div>
  );
};

export default PostCard;