import React, { useState } from "react";
import "./ManageUsers.css";

function ManageUsers() {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Smriti Singh",
      email: "smriti@gmail.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543211",
    },
    {
      id: 3,
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      phone: "9876543212",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">

      <h1>Manage Users</h1>

      <input
        type="text"
        placeholder="Search User..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>

                <td>
                  <button className="view-btn">
                    View
                  </button>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageUsers;