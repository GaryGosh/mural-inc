import React from "react";
import { LIBRARY_TABS_OPTION } from "../constants/constants";
import Tabs from "./Tabs";

function Libarary() {
  return (
    <div>
      <h2>Library</h2>
      <Tabs values={LIBRARY_TABS_OPTION} />
    </div>
  );
}

export default Libarary;
