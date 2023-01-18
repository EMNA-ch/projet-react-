import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";
import NavBar from "../components/NavBar";
import { getOnePost } from "../redux/actions/postActions";
import location1 from "../assets/images/location1.png";
import sfax from "../assets/images/sfax.jpg";
import StoryCard from "../components/StoryCard";
// import location2 from "../assets/images/location2.png";
// import location3 from "../assets/images/location3.png";
// import location4 from "../assets/images/location4.png";

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
        <div className="container">
          <NavBar color="white" />
          <section className="mt-5">
            <div className="w-100">
              <div className="col shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                {/* {JSON.stringify(post)} */}
                <div className="row card my-3 text-danger p-3">
                  {" "}
                  {post?.title}{" "}
                </div>
                {/* {loading ? (
            <h1> loading... </h1>
          ) :} */}
                <StoryCard index={0} />
                <StoryCard index={1} />
                <StoryCard index={2} />
                <StoryCard index={3} />
                <StoryCard index={4} />
                <StoryCard index={5} />
                <StoryCard index={6} />
                <StoryCard index={7} />
                <div className="row card my-3 text-danger p-3">Infos</div>
              </div>
            </div>
          </section>

          {/* <h1>One post</h1>

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
              
            </div>
          )} */}
          {/* <section className="mt-5">
            <div className="w-100">
              <div className="col shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                <div className="row card my-3 text-danger p-3">Comments</div>
                <div className="row">
                  <div className="col">
                    <CommentForm postId={post?._id} getOnePost={getOnePost} />
                  </div>
                  <div className="col">
                    {post?.comments?.usercomments.map((comment) => (
                      <CommentItem
                        key={comment._id}
                        comment={comment}
                        postId={post?._id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button">
                  {post?.comments?.usercomments.length} Comments
                </button>
              </h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col">
                      <CommentForm postId={post?._id} getOnePost={getOnePost} />
                    </div>
                    <div className="col">
                      {post?.comments?.usercomments.map((comment) => (
                        <CommentItem
                          key={comment._id}
                          comment={comment}
                          postId={post?._id}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
