import React, { useState } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import 'react-dropdown/style.css';
import './index.css';

export type ListItemProps={
  name: string;
  role: string;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const [edit, makeEdit] = useState(false);
  const roles: string[] = [
    'Admin',
    'Developer',
    'Tester',
    'Product Manager',
    'Designer',
    'Marketing Manager',
    'Sales Manager',
  ];
  const [role, setRole] = useState<string>(props.role);

  const handleDropdownChange = (selectedOption: Option) => {
    setRole(selectedOption.value as string);
  };

  return (
    <div className="user-item">
      <div>{props.name}</div>
      <div>
      {edit ? (
  <Dropdown
    options={roles}
    onChange={handleDropdownChange}
    value={role}
    placeholder="Select a role"
  />
) : (
  <div className="role">{role}</div>
)}      </div>
      <button className="edit-btn" onClick={() => makeEdit(!edit)}>
        {edit ? 'Save' : <MdOutlineModeEditOutline />}
      </button>
    </div>
  );
};

export default ListItem;
