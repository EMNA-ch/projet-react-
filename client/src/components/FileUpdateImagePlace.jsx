import React from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { useState } from "react";
import { toast } from "react-toastify";

const FileUpdateImagePlace = ({ place, places, setPlaces }) => {
  const [loading, setLoading] = useState(false);
  //   console.log("places", places);
  //   console.log("place", place);
  const fileUploadAndResize = (e) => {
    //resize image
    let file = e.target.files[0];
    if (file) {
      setLoading(true);
      Resizer.imageFileResizer(
        file,
        720,
        720,
        "JPEG",
        100,
        0,
        async (uri) => {
          try {
            const res = await axios.post("/api/cloudinary/upload", {
              image: uri,
            });
            if (res) {
              setLoading(false);
              toast.success("Image Uploded");
              setPlaces(
                [...places].map((object) => {
                  if (object.step === place.step) {
                    return {
                      ...object,
                      image: res.data,
                    };
                  } else return object;
                })
              );
            }
          } catch (error) {
            setLoading(false);
            toast.error("Image Too Large");
          }
        },
        "base64"
      );
    }
  };
  const handleRemove = (public_id) => {
    setLoading(true);
    axios
      .post("/api/cloudinary/remove", {
        public_id,
      })
      .then((res) => {
        setLoading(false);
        setPlaces(
          [...places].map((object) => {
            if (object.step === place.step) {
              return {
                ...object,
                image: "",
              };
            } else return object;
          })
        );
        toast.info("Image Removed");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <div className="row mb-3">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <label className="col-sm-3 col-form-label">Image</label>
            <div className="col">
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept="images/*"
                onChange={fileUploadAndResize}
              />
            </div>
          </>
        )}
      </div>
      {place?.image?.url && (
        <div className="my-3 position-relative">
          <img
            className="shadow p-1 bg-body-tertiary border border-danger rounded-pill"
            src={place?.image?.url}
            width={100}
            height={100}
            alt="..."
          />
          <span
            className="position-absolute btn top-0 start-10 translate-middle badge rounded-pill bg-danger"
            key={place?.image?.public_id}
            onClick={() => handleRemove(place?.image?.public_id)}
          >
            X
          </span>
        </div>
      )}
    </>
  );
};

export default FileUpdateImagePlace;
