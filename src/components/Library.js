import React from "react";
import { BOOKS_LIBRARY, LIBRARY_TABS_OPTION } from "../constants/constants";
import BookThumb from "./BookThumb";
import Tabs from "./Tabs";
import "./Library.css";

function Libarary() {
  return (
    <div>
      <h2>Library</h2>

      <Tabs values={LIBRARY_TABS_OPTION} />
      <div className="books-wrapper">
        {BOOKS_LIBRARY.map((book) => (
          <div>
            <BookThumb booksList={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Libarary;
