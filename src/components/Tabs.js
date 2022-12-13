import React, { useState } from "react";
import "./Tabs.css";

function Tabs({ values }) {
  const [selectedTab, setSelectedTab] = useState("All Items");
  const handleTabClick = (e) => {
    if (e.target.className === "tab ") {
      console.log("see : ", e.target.innerText);
      setSelectedTab(e.target.innerText);
    }
  };
  return (
    <div className="tabs-container" onClick={(e) => handleTabClick(e)}>
      {values?.map((val) => (
        <div
          className={`tab ${selectedTab === val.name ? "active" : ""}`}
          key={val.name}
          value={val.name}
        >
          {val.name}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
