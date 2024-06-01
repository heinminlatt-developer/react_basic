import React, { useRef } from "react";
function UseRef(props) {
  const nameRef = useRef();
  const passRef = useRef();
  const addUser = (e) => {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      password: passRef.current.value,
    };
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
            ref={nameRef}
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
            ref={passRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default UseRef;

// import React, { useState } from "react";
// import AddUser from "./components/AddUser";
// import UseRef from "./components/UseRef";
// function App() {
//   const [user, setUser] = useState({});
//   const addUserHandler = (newUser) => {
//     setUser((prev) => ({ id: 1, ...newUser }));
//   };
//   return (
//     <div className="container">
//       <div>
//         <p>UserName:{user.name}</p>
//         <p>Password:{user.password}</p>
//       </div>
//       <h1>Hello World</h1>
//       <UseRef addUser={addUserHandler} />
//     </div>
//   );
// }
// export default App;
