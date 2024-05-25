import { useState } from "react";
function AddUser(props) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cell, setCell] = useState("");
  const [uuid, setUuid] = useState("");
  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const cellChangeHandler = (e) => {
    setCell(e.target.value);
  };

  const uuidChangeHandler = (e) => {
    setUuid(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let users = {
      image: image,
      name: name,
      phone: phone,
      cell: cell,
      uuid: uuid,
    };
    props.addUser(users)
  };

  return (
    <div className="card bg-dark px-3 my-5 text-white">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="image"
            className="form-control"
            id="image"
            onChange={imageChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cell" className="form-label">
            Cell:
          </label>
          <input
            type="tel"
            className="form-control"
            id="cell"
            onChange={cellChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="uuid" className="form-label">
            UUID:
          </label>
          <input
            type="text"
            className="form-control"
            id="uuid"
            onChange={uuidChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary float-end btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
