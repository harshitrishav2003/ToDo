import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">ToDo</div>
      <div className="user-settings">
      <div className="profile-photo">
          <span className="initials">H</span> 
        </div>
        <span className="user-name">Hey, Harshit Rishav</span>
      </div>
    </header>
  );
}


export default Header;
