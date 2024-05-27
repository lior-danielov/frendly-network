import React from 'react';
import "./sidebar.css";
// צריך להיות רשימת חברים של המשתמש
const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <h2>Sidebar</h2>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Messages</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
