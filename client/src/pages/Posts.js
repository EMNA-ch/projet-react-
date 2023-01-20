import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";
import PostCard from "../components/PostCard";
import NavBar from "../components/NavBar";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { posts, loading } = useSelector((state) => state.postReducer);
  return (
    <div>
      <section>
        <div className="container">
          <NavBar color="white" />
          <section className="mt-5">
            <div className="w-100">
              <div className="col shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                {loading ? (
                  <h1> loading... </h1>
                ) : (
                  <div>
                    {posts.map((post, i) => (
                      <PostCard post={post} key={post._id} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Posts;
