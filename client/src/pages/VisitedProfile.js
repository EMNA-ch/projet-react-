import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
// import { getUserPosts } from "../redux/actions/postActions";
import PostCard from "../components/PostCard";
import { getUserPosts } from "../redux/actions/postActions";
import { getVisitedUser } from "../redux/actions/userActions";

const VisitedProfile = () => {
  const { posts, loading } = useSelector((state) => state.postReducer);
  const { visitedUser, user } = useSelector((state) => state.userReducer);
  // console.log(visitedUser);
  const dispatch = useDispatch();
  const params = useParams();
  // visited profile
  useEffect(() => {
    dispatch(getVisitedUser(params.id));
    dispatch(getUserPosts(params.id));
  }, [dispatch, params.id]);
  // user profile
  //   useEffect(() => {
  //     dispatch(getUserPosts(params.id));
  //   }, [dispatch, params.id]);
  return (
    <div>
      <section className="container vh-100">
        <NavBar color="white" />
        {params.id === user?.id ? (
          <Navigate to={`/profile/${params.id}`} />
        ) : (
          <div className="row py-5 px-4 ">
            <div className="col mx-auto">
              <div className="bg-white shadow rounded overflow-hidden">
                <div className="px-4 pt-0 pb-4 cover bg-primary bg-opacity-50">
                  <div className="media align-items-end profile-head">
                    <div className="profile container">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src={visitedUser?.avatar?.url}
                            alt="..."
                            width="130"
                            className="rounded mb-2 img-thumbnail"
                          />
                        </div>
                        <div className="col">
                          <div className="media-body mb-5 text-dark">
                            <h4 className="mt-0 mb-0">
                              {visitedUser && visitedUser.name.toUpperCase()}
                            </h4>
                          </div>
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
                    <p className="font-italic mb-0">
                      {visitedUser && visitedUser.email}
                    </p>
                  </div>
                </div>
                <div className="py-4 px-4">
                  <div className="col shadow-lg p-4 bg-body-tertiary rounded text-center d-flex flex-column justify-content-center">
                    {loading ? (
                      <h1> loading... </h1>
                    ) : (
                      <div className="list">
                        {posts.length ? (
                          posts.map((el, i) => <PostCard post={el} key={i} />)
                        ) : (
                          <h6>No Posts</h6>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default VisitedProfile;
