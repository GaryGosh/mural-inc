// import Vangough from "./assets/vangough.png";

import "./App.css";
import BookBanner from "./components/BookBanner";
import GoalBanner from "./components/GoalBanner";
import { BOOKS_LIBRARY } from "./constants/constants";

function App() {
  return (
    <div className="home">
      <div className="mural">
        <span className="m">M</span>
        <span className="u">u</span>
        <span className="r">r</span>
        <span className="a">a</span>
        <span className="l">l</span>
      </div>
      <GoalBanner />
      <div className="home-carousel">
        {BOOKS_LIBRARY.map((book) => (
          <div>
            <BookBanner booksList={book} />
          </div>
        ))}
      </div>
      <div className="player-wrapper">
        <div className="player">
          <img
            className="playing"
            src="https://mural-assets.s3.ap-northeast-1.amazonaws.com/Black+Swan+playing.jpeg"
            alt="playing"
          />
          <div className="player-content-wrapper">
            <div className="title">The Black Swan</div>
            <div className="continue">Continue Reading &gt;</div>
          </div>
        </div>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
