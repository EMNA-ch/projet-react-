import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import CommentForm from "../components/CommentForm";
import CommentItem from "../components/CommentItem";
import NavBar from "../components/NavBar";
import { getOnePost } from "../redux/actions/postActions";
import StoryCard from "../components/StoryCard";
// import location2 from "../assets/images/location2.png";
// import location3 from "../assets/images/location3.png";
// import location4 from "../assets/images/location4.png";

const Story = () => {
  const { post } = useSelector((state) => state.postReducer);
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
                  {post?.title}
                </div>
                {/* {loading ? (
            <h1> loading... </h1>
          ) :} */}
                <StoryCard index={0} post={post} />
                {/* <StoryCard index={1} />
                <StoryCard index={2} />
                <StoryCard index={3} />
                <StoryCard index={4} />
                <StoryCard index={5} />
                <StoryCard index={6} />
                <StoryCard index={7} /> */}
                <div className="row card my-3 text-danger p-3">Comments</div>
              </div>
            </div>
          </section>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {post?.comments?.usercomments.length} Comments
              </Accordion.Header>
              <Accordion.Body>
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
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Story;
