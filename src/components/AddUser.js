import React, { useState } from "react";

function AddUser(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    let user={
        name,password
    }
    props.addUser(user);
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User-Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
