import React from "react";


function User({ data, remove }) {
  const handleRemove = () => {
    remove(data.uuid);
  };
  return (
    <div className="card mb-2 mt-2">
      <div className="row">
        <div className="col-2">
          <img
            src={data.photo}
            alt="Image not found"
            width="50px"
            height="50px"
          />
        </div>
        <div className="col-5">
          <p>Name:{data.name}</p>
        </div>
        <div className="col-4">
          <p>Phone:{data.phone}</p>
          <p>Cell:{data.cell}</p>
        </div>
        <div className="col-1">
          <button className="btn btn-danger btn-sm" onClick={handleRemove}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default User;
