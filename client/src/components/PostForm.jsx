import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import ModalDialog from "react-bootstrap/ModalDialog";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postActions";
import FileUpload from "./FileUpload";
import FileUploadPlace from "./FileUploadPlace";

const initialState = {
  step: 0,
  place: "",
  description: "",
  cost: "",
  image: "",
};

const PostForm = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Party");
  const [location, setLocation] = useState("Sfax");
  // const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("Join Family Party");
  const [transport, setTransport] = useState("car");
  const [cost, setCost] = useState("5000");
  const [image, setImage] = useState({});
  const [places, setPlaces] = useState([]);
  const [newPlace, setNewPlace] = useState(initialState);
  // console.log(places);
  // console.log(newPlace);
  // console.log("image", image);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = (e) => {
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
    dispatch(createPost(newPost));
    handleClose();
  };
  const addPlace = () => {
    if (item.length === 0) {
      const current = [...item];
      current.push("newDiv");
      setItem(current);
    }
  };
  const addNewPlace = () => {
    if (newPlace.description && newPlace.image && newPlace.place) {
      //Cloudinary**start**
      // const data = new FormData();
      // data.append("file", newPlace.image);
      //Cloudinary**end**
      newPlace.step = places.length;
      setPlaces([...places, newPlace]);
      setNewPlace(initialState);
      toast.success(`${places.length + 1} place(s) are added !!`);
    } else {
      toast.error("Please fill all place informations !!");
    }
  };

  return (
    <div>
      <Button variant="btn btn-info text-white b-5 my-3" onClick={handleShow}>
        <i className="bi bi-plus-circle text-white"></i> Create New Post
      </Button>

      <Modal show={show} onHide={() => setShow(false)} fullscreen={true}>
        <Modal.Header closeButton className="bg-primary bg-opacity-50">
          <Modal.Title id="example-custom-modal-styling-title">
            Create New Post
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
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">Add Places</label>
                <div className="col">
                  <button className="btn btn-danger" onClick={addPlace}>
                    <i className="bi bi-plus-circle text-white"></i>
                  </button>
                </div>
              </div>
            </div>
            {item.length > 0 && (
              <div className="col-md-5 shadow-lg bg-body-tertiary rounded text-start px-5">
                <div className="row card my-3 text-primary p-3 text-center">
                  {/* ****************************************** */}
                  {/* ****************Places******************** */}
                  {/* ****************************************** */}
                  Places Infos
                </div>
                {item?.map((el, i) => (
                  <div key={i}>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputName3"
                        className="col-sm-3 col-form-label"
                      >
                        Step
                      </label>
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          disabled
                          value={places.length}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label">Place</label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          value={newPlace.place}
                          required
                          onChange={(e) =>
                            setNewPlace({ ...newPlace, place: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label">
                        Description
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          value={newPlace.description}
                          required
                          onChange={(e) =>
                            setNewPlace({
                              ...newPlace,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 col-form-label">Cost</label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          value={newPlace.cost}
                          required
                          onChange={(e) =>
                            setNewPlace({ ...newPlace, cost: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <FileUploadPlace
                      newPlace={newPlace}
                      setNewPlace={setNewPlace}
                    />

                    <div className="row mb-3">
                      <hr />
                    </div>
                  </div>
                ))}
                <div className="row mb-3 ">
                  <button
                    className="btn btn-info text-white d-flex justify-content-center align-items-center"
                    onClick={addNewPlace}
                  >
                    <i className="bi bi-folder-plus text-white mx-2"></i>
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </form>
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
