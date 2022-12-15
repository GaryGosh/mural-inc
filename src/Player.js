import React, { useEffect, useState } from "react";
import "./Player.css";
import BackIcon from "./assets/back-btn.png";
import NextPage from "./assets/right.png";
import PrevPage from "./assets/left.png";
import { useNavigate } from "react-router-dom";
import { BLACK_SWAN } from "./assets/books/BlackSwan";

function Player() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    BLACK_SWAN.forEach((page) => {
      if (currentIndex === page.slide) {
        console.log(page);
        setBookData(page);
      }
    });
  }, [currentIndex]);

  const goBack = () => {
    navigate("/", {});
  };

  const goToNextPage = () => {
    if (currentIndex <= BLACK_SWAN.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
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
      <div className="book">
        <div className="book-content">
          {bookData && bookData.type === "chapterTitle" ? (
            <div className="book-title-wrapper">
              <div className="book-title" key={bookData.title}>
                {bookData.title}
              </div>
              <div className="book-title-content" key={bookData.slide}>
                {bookData.mainBody.split(" ").map((word) => (
                  <span>{`${word} `}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="story-wrapper">
              <div className="story">{bookData && bookData.mainBody}</div>
              <div className="img-wrapper">
                <img
                  className="story-image"
                  src={bookData?.imageUrl}
                  alt="swan"
                />
                {bookData && bookData.animText ? (
                  <div className="animText">{bookData.animText}</div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="nav-btns">
        <div className="nav-btn-wrapper">
          <img
            className="prev-page"
            src={PrevPage}
            alt="prev"
            onClick={() => goToPrevPage()}
          />
          <img
            className="next-page"
            src={NextPage}
            alt="next"
            onClick={() => goToNextPage()}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
