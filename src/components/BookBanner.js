import React from "react";
import "./BookBanner.css";

function BookBanner({ booksList }) {
  return (
    <div className="book-banner-container">
      <img
        className="book-banner"
        src={booksList.imageUrl}
        alt={booksList.name}
      />
      <div className="book-description-wrapper">
        <div className="book-name">{booksList.name}</div>
        <div className="author-name">{booksList.author}</div>
        <div className="tagline">{booksList.tagLine}</div>
      </div>
    </div>
  );
}

export default BookBanner;
