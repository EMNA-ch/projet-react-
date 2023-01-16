import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";
import NavBar from "../components/NavBar";
import { getOnePost } from "../redux/actions/postActions";

const Story = () => {
  const { post, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getOnePost(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <section>
        <div className="container vh-100">
          <NavBar color="white" />
          <h1>One post</h1>

          {loading ? (
            <h1> loading... </h1>
          ) : (
            <div>
              <h3>{post?.title}</h3>
              <div className="container">
                <div className=" text-start d-flex justify-content-around align-items-start">
                  <h4>From: {post?.location}</h4>
                  <h4>To: {post?.destination}</h4>
                </div>
              </div>
              <div>
                <CommentForm postId={post?._id} getOnePost={getOnePost} />
                {post?.comments?.usercomments.map((comment) => (
                  <CommentItem
                    key={comment._id}
                    comment={comment}
                    postId={post?._id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Story;
