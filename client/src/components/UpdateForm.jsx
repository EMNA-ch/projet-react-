import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../redux/actions/postActions";
import FileUpload from "./FileUpload";
import PlaceCard from "./PlaceCard";

const UpdateForm = ({ post, setShow, show }) => {
  const { loading } = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title);
  const [location, setLocation] = useState(post.location);
  const [description, setDescription] = useState(post.description);
  const [transport, setTransport] = useState(post.transport);
  const [cost, setCost] = useState(post.cost);
  const [image, setImage] = useState(post.image);
  const [places, setPlaces] = useState(post.places);

  const handleClose = () => setShow(false);
  // console.log(places);
  const handleUpdatePost = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      location,
      image,
      description,
      transport,
      cost,
      places,
    };
    dispatch(updatePost(newPost, post._id));
    handleClose();
  };

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} fullscreen={true}>
        <Modal.Header closeButton className="bg-primary bg-opacity-50">
          <Modal.Title id="example-custom-modal-styling-title">
            Update Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container"></div>
          <form className="mt-5 row justify-content-around align-items-center">
            <div className="col-md-5 shadow-lg bg-body-tertiary rounded text-start px-5">
              <div className="row card my-3 text-primary p-3 text-center">
                General Infos
              </div>
              <div className="row pt-5 mb-3">
                <label htmlFor="inputName3" className="col-sm-3 col-form-label">
                  Title
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Location</label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={location}
                    required
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Description</label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3 ">
                <label className="col-sm-3 col-form-label">Transport</label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={transport}
                    required
                    onChange={(e) => setTransport(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Cost</label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={cost}
                    required
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
              </div>
              <FileUpload image={image} setImage={setImage} />
            </div>

            <div className="col-md-5 shadow-lg bg-body-tertiary rounded text-start px-5">
              <div className="row card my-3 text-primary p-3 text-center">
                Places Infos
              </div>
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                places?.map((place) => (
                  <PlaceCard
                    key={place._id}
                    place={place}
                    setPlaces={setPlaces}
                    places={places}
                  />
                ))
              )}
              {/* <div className="row mb-3 ">
                <button
                  className="btn btn-info text-white d-flex justify-content-center align-items-center"
                  // onClick={addNewPlace}
                >
                  <i className="bi bi-folder-plus text-white mx-2"></i>
                  Update Places
                </button>
              </div> */}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-outline-info" onClick={handleUpdatePost}>
            Update Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateForm;
