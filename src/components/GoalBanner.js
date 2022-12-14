import React from "react";
import "./GoalBanner.css";

function GoalBanner() {
  return (
    <div className="goal-banner-wrapper">
      <div className="goal-block">
        <div className="medium-font">Today's Goal</div>
        <div className="thin-font">Read 3 chapters</div>
      </div>
      <div className="seperator"></div>
      <div className="current-streak">
        <div className="medium-font">Current streak</div>
        <div className="thin-font">0 days</div>
      </div>
    </div>
  );
}

export default GoalBanner;
