// import Vangough from "./assets/vangough.png";

import "./App.css";
import BookBanner from "./components/BookBanner";
import GoalBanner from "./components/GoalBanner";
import { BOOKS_LIBRARY } from "./constants/constants";

function App() {
  return (
    <div className="home">
      <h1 className="mural">Mural</h1>
      <GoalBanner />
      <div className="home-carousel">
        {BOOKS_LIBRARY.map((book) => (
          <div>
            <BookBanner booksList={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
