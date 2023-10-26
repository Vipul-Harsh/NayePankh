import React from "react";
import "./NavBar.css";
const JoinTeam = () => {
  return (
    <div className="join">
      <div className="box"></div>
      <div className="form">
        <h2>Join Our Team</h2>
        <form className="formdata">
          <input type="text" placeholder="Enter Your Name"></input>
          <input type="text" placeholder="Enter Your Email"></input>
          <input type="number" placeholder="Enter Your Age"></input>
          <input type="text" placeholder="Enter Your College Name"></input>
          <button type="submit" className="submit">Join</button>
        </form>
      </div>
    </div>
  );
};

export default JoinTeam;
