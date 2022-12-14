import React from "react";
import "./Player.css";
import BackIcon from "./assets/back-btn.png";
import { useNavigate } from "react-router-dom";

function Player() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/", {});
  };

  return (
    <div>
      <div className="back-btn">
        <img
          className="back-icon"
          src={BackIcon}
          alt="back"
          onClick={() => goBack()}
        />
      </div>
      <div className="book"></div>
    </div>
  );
}

export default Player;
