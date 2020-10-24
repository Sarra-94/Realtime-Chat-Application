import React, { useState } from "react";
import "./join.css";
import { Link } from "react-router-dom";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            onChange={(e) => setRoom(e.target.value)}
            type="text"
          />
        </div>

        <button className={"button mt-20"} type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Join;