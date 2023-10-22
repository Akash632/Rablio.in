import React from "react";
import "./Slider.css";
import programmer from "../../assets/programmer.png";
import logo from "../../assets/logo.png";
function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-content">
        <div className="person-logo">
          <img src={logo} />
        </div>
        <div className="slider-options">
          <ul>
            <li>View Profile</li>
            <li>Employee Status</li>
            <li>Salary Deposits</li>
            <li>Announcements</li>
            <li>Meetings</li>
            <li>progress</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="slider-btn">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
