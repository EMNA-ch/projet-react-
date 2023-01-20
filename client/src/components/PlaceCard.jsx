import React from "react";
import FileUpdateImagePlace from "./FileUpdateImagePlace";

const PlaceCard = ({ place, setPlaces, places }) => {
  return (
    <>
      <div className="row mb-3">
        <label htmlFor="inputName3" className="col-sm-3 col-form-label">
          Step
        </label>
        <div className="col">
          <input
            type="number"
            className="form-control"
            disabled
            value={place.step}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-3 col-form-label">Place</label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={place.place}
            required
            onChange={(e) => {
              setPlaces(
                [...places].map((object) => {
                  if (object.step === place.step) {
                    return {
                      ...object,
                      place: e.target.value,
                    };
                  } else return object;
                })
              );
            }}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-3 col-form-label">Description</label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={place?.description}
            required
            onChange={(e) => {
              setPlaces(
                [...places].map((object) => {
                  if (object.step === place.step) {
                    return {
                      ...object,
                      description: e.target.value,
                    };
                  } else return object;
                })
              );
            }}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-3 col-form-label">Cost</label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={place?.cost}
            required
            onChange={(e) => {
              setPlaces(
                [...places].map((object) => {
                  if (object.step === place.step) {
                    return {
                      ...object,
                      cost: e.target.value,
                    };
                  } else return object;
                })
              );
            }}
          />
        </div>
      </div>
      <FileUpdateImagePlace
        place={place}
        setPlaces={setPlaces}
        places={places}
      />
      <div className="row mb-3">
        <hr />
      </div>
    </>
  );
};

export default PlaceCard;
