import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postActions";
const PostForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [transport, setTransport] = useState("");
  const [cost, setCost] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      location,
      destination,
      description,
      transport,
      cost,
    };
    dispatch(createPost(newPost));
    handleClose();
  };
  return (
    <div>
      <Button variant="btn btn-info text-white b-5 my-3" onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-primary bg-opacity-50">
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col shadow-lg bg-body-tertiary rounded text-start px-5">
            <form className="mt-5">
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
                <label className="col-sm-3 col-form-label">Destination</label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={destination}
                    required
                    onChange={(e) => setDestination(e.target.value)}
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
              <div className="row mb-3 pb-5">
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
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-outline-info" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostForm;
