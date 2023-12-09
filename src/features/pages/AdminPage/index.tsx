import React, { useState } from "react";
import ListItem from "../../../app/components/ListItem";
import "./index.css";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";

export type User = {
  name: string;
  role: string;
};

export type AdminDashProps = {
  rolesArray: string[];
};

const AdminDash: React.FC<AdminDashProps> = (props) => {
  const [usersData, setUsers] = useState({
    1: { name: "John Doe", role: "Admin" },
    2: { name: "Jane Doe", role: "Developer" },
  });

  const onAddUser = (newUser: User) => {
    const newUserId = Object.keys(usersData).length + 1;

    setUsers((prevUsers) => ({
      ...prevUsers,
      [newUserId]: newUser,
    }));
  };
  let roles = props.rolesArray;

  const userList = Object.values(usersData);

  const [role, setRole] = useState<string>("Developer");
  const [newUserName, setNewUserName] = useState<string>("");

  const handleDropdownChange = (selectedOption: Option) => {
    setRole(selectedOption.value as string);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(event.target.value);
  };

  const addUser = () => {
    if (newUserName.trim() === "") {
      alert("Please enter a name for the new user.");
      return;
    }

    const newUser: User = {
      name: newUserName,
      role: role,
    };

    onAddUser(newUser);
    // Write code here to add user to the database
    // If it fails, write code to remove the user from the list

    // Reset input fields
    setNewUserName("");
    setRole("Developer");
  };

  return (
    <div className="admin-dash">
      <div className="add-user">
        <input
          placeholder="Enter name of User"
          value={newUserName}
          onChange={handleNameChange}
        />
        <Dropdown
          className="select-role"
          options={roles}
          onChange={handleDropdownChange}
          value={role}
          placeholder="Select a role"
        />
        <button onClick={addUser}>Save</button>
      </div>
      <div className="list-card">
        <div className="list-header user-item">
          <div>Name</div>
          <div>Role</div>
          <div>Edit</div>
        </div>
        <div>
          {userList.map((user, index) => (
            <div key={index}>
              <ListItem role={user.role} name={user.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
