import React from "react";
import "./Tabs.css";

function Tabs({ values }) {
  const handleTabClick = (e) => {
    console.log(e);
    console.log("see : ", e.target.innerText);
  };
  return (
    <div className="tabs-container" onClick={(e) => handleTabClick(e)}>
      {values?.map((val) => (
        <div className="tab" key={val.name} value={val.name}>
          {val.name}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
