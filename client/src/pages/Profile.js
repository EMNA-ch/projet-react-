import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getUserPosts } from "../redux/actions/postActions";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import UpdateProfileFrom from "../components/UpdateProfileForm";
// import UpdateProfile from "../components/UpdateProfileForm";

const Profile = () => {
  const { posts, loading } = useSelector((state) => state.postReducer);
  const { user, loading: ld } = useSelector((state) => state.userReducer);

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
        {/* {JSON.stringify(posts)} */}
        {ld ? (
          <h3>loading...</h3>
        ) : (
          <div className="row py-5 px-4 ">
            <div className="col mx-auto">
              <div className="bg-white shadow rounded overflow-hidden bg-card">
                <div className="px-4 pt-0 pb-4 cover bg-primary bg-opacity-50">
                  <div className="media align-items-end profile-head">
                    <div className="profile container">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            className="shadow p-1 bg-body-tertiary border border-danger rounded-pill"
                            src={user?.avatar?.url}
                            width={100}
                            height={100}
                            alt="..."
                          />
                        </div>
                        <div className="col">
                          <div className="media-body mb-5 text-dark">
                            <h4 className="mt-0 mb-0">
                              {user && user?.name?.toUpperCase()}
                            </h4>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <UpdateProfileFrom user={user} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <br />
                  <br />
                </div>
                <div className="p-3">
                  <h5 className="mb-0">About</h5>
                  <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">{user && user?.email}</p>
                  </div>
                </div>

                <div className="p-4  text-center">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recently shared posts</h5>
                    <div>
                      <PostForm />
                    </div>
                  </div>
                  {loading ? (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <div>
                      {posts.length ? (
                        posts.map((post) => (
                          <PostCard
                            post={post}
                            key={post._id}
                            authorID={params.id}
                          />
                        ))
                      ) : (
                        <h6>No Posts</h6>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
