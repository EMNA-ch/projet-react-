import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/actions/postActions";

const UpdateForm = ({ post, setShow, show }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(post.title);
  const [location, setLocation] = useState(post.location);
  const [destination, setDestination] = useState(post.destination);
  const [description, setDescription] = useState(post.description);
  const [transport, setTransport] = useState(post.transport);
  const [cost, setCost] = useState(post.cost);

  const handleClose = () => setShow(false);
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      location,
      destination,
      description,
      transport,
      cost,
    };
    dispatch(updatePost(updatedPost, post._id));
    handleClose();
  };
  return (
    <div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="bg-primary bg-opacity-50">
            <Modal.Title>Update Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col shadow-lg bg-body-tertiary rounded text-start px-5">
              <Form className="mt-5" onSubmit={handleUpdate}>
                <Form.Group className="row pt-5 mb-3">
                  <Form.Label
                    htmlFor="Form.ControlName3"
                    className="col-sm-3 col-form-Form.Label"
                  >
                    Title
                  </Form.Label>
                  <div className="col">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3 col-form-Form.Label">
                    Location
                  </Form.Label>
                  <div className="col">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={location}
                      required
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3 col-form-Form.Label">
                    Destination
                  </Form.Label>
                  <div className="col">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={destination}
                      required
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3">
                  <Form.Label className="col-sm-3 col-form-Form.Label">
                    Description
                  </Form.Label>
                  <div className="col">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={description}
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3 ">
                  <Form.Label className="col-sm-3 col-form-Form.Label">
                    Transport
                  </Form.Label>
                  <div className="col">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={transport}
                      required
                      onChange={(e) => setTransport(e.target.value)}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="row mb-3 pb-5">
                  <Form.Label className="col-sm-3 col-form-Form.Label">
                    Cost
                  </Form.Label>
                  <div className="col">
                    <Form.Control
                      type="text"
                      className="form-control"
                      value={cost}
                      required
                      onChange={(e) => setCost(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="btn btn-outline-danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="btn btn-outline-info" onClick={handleUpdate}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default UpdateForm;
