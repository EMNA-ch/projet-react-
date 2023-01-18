import React from "react";

const PlaceCard = ({ place, setPlace }) => {
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
            value={place.location}
            required
            onChange={(e) => setPlace(...place, { location: e.target.value })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-3 col-form-label">Description</label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={place.description}
            required
            onChange={(e) =>
              setPlace(...place, { description: e.target.value })
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
            value={place.cost}
            required
            onChange={(e) => setPlace([...place, { cost: e.target.value }])}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-3 col-form-label">Image</label>
        <div className="col">
          <input className="form-control" type="file" id="formFile" />
        </div>
      </div>
      <div className="row mb-3">
        <hr />
      </div>
    </>
  );
};

export default PlaceCard;
