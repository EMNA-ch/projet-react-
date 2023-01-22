import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateComment } from "../redux/actions/postActions";

const UpdateComment = ({ comment, postId }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(comment.text);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleUpdateComment = (e) => {
    e.preventDefault();
    const newComment = {
      text,
    };
    dispatch(updateComment(newComment, postId, comment._id));
    handleClose();
  };
  return (
    <div>
      <i
        className="bi bi-pencil-fill text-success"
        role="button"
        onClick={handleShow}
      ></i>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="bg-primary bg-opacity-50">
          <Modal.Title id="example-custom-modal-styling-title">
            Update Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container "></div>
          <Form.Group className="mt-2 row justify-content-around align-items-center">
            <div className="col shadow-lg bg-body-tertiary rounded text-start pt-3">
              <div className="row mb-3">
                <Form.Label
                  htmlFor="inputName"
                  className="col-sm-3 col-form-label"
                >
                  Comment
                </Form.Label>
                <div className="col">
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={text}
                    required
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-outline-info" onClick={handleUpdateComment}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateComment;
