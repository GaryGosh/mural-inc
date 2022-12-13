import React from "react";
import "./BookThumb.css";

function BookThumb({ booksList }) {
  return (
    <div className="booklist-container">
      <img
        className="book-thumb"
        src={booksList.imageUrl}
        alt={booksList.name}
      />
      <div className="book-name">{booksList.name}</div>
      <div className="author-name">{booksList.author}</div>
    </div>
  );
}

export default BookThumb;
