import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getUserPosts } from "../redux/actions/postActions";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Profile = () => {
  const { posts, loading } = useSelector((state) => state.postReducer);
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const params = useParams();
  // visited profile
  // useEffect(() => {
  //   dispatch(getVisitedUser(params.id));
  // }, []);
  // user profile
  useEffect(() => {
    dispatch(getUserPosts(params.id));
  }, [dispatch, params.id]);
  return (
    <div>
      <section className="container">
        <NavBar color="white" />
        <div className="row py-5 px-4 ">
          <div className="col mx-auto">
            {/* <!-- Profile widget --> */}
            <div className="bg-white shadow rounded overflow-hidden bg-card">
              <div className="px-4 pt-0 pb-4 cover bg-primary bg-opacity-50">
                <div className="media align-items-end profile-head">
                  <div className="profile container">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-FTr8wwpK2fQ9E1h9uhr0avZSmuVKGAnb6X5Dmal-_Nhvw-kJ&usqp=CAU"
                          alt="..."
                          width="130"
                          className="rounded mb-2 img-thumbnail"
                        />
                      </div>
                      <div className="col">
                        <div className="media-body mb-5 text-dark">
                          <h4 className="mt-0 mb-0">
                            {user && user.name.toUpperCase()}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light p-4 d-flex justify-content-center text-center mt-3"></div>
              <div className="px-4 py-3">
                <h5 className="mb-0">About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                  <p className="font-italic mb-0">{user && user.email}</p>
                </div>
              </div>
              <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="mb-0">Recently shared posts</h5>
                </div>
                <div className="col shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                  {loading ? (
                    <h1> loading... </h1>
                  ) : (
                    <div>
                      {posts.length ? (
                        posts.map((el, i) => (
                          <PostCard post={el} key={i} authorID={params.id} />
                        ))
                      ) : (
                        <h6>No Posts</h6>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="profile d-flex justify-content-center align-items-center">
                <PostForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;