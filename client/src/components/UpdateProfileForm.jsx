import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/userActions";

const UpdateProfileFrom = ({ user }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  //   const [avatar, setAvatar] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedProfile = {
      name,
      email,
      //avatar,
    };
    dispatch(updateProfile(updatedProfile, user.id));
    handleClose();
  };
  return (
    <div>
      <Button variant="text-dark" onClick={handleShow}>
        Update profile
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="bg-primary bg-opacity-50">
          <Modal.Title id="example-custom-modal-styling-title">
            Update Profile
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
                  Name
                </Form.Label>
                <div className="col">
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <Form.Label className="col-sm-3 col-form-label">
                  Email
                </Form.Label>
                <div className="col">
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="row  mb-3">
                <Form.Label htmlFor="inputName" className="col-sm-3 col-form-label">
                  Name
                </Form.Label>
                <div className="col">
                  <Form.Control
                    type="text"
                    className="form-control"
                    value={avatar}
                    required
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </div>
              </div> */}
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-outline-info" onClick={handleUpdateProfile}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProfileFrom;
