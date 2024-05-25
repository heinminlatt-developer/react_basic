import React, { useEffect, useState } from "react";
import User from "./components/users/User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        const rawUsers = data.results;
        const filteredUsers = rawUsers.map((usr) => {
          return {
            uuid: usr.login.uuid,
            name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            phone: usr.phone,
            cell: usr.cell,
            photo: usr.picture.thumbnail,
          };
        });
        setUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeUserHandler = (uuid) => {
    setUsers((prevUsers) => prevUsers.filter((usr) => usr.uuid !== uuid));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5 text-info">Our Employees</h1>
      <div className="row">
        {users.map((user) => (
          <User key={user.uuid} data={user} remove={removeUserHandler} />
        ))}
      </div>
    </div>
  );
}

export default App;
