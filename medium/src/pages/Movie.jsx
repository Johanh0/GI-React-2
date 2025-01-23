import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import leftArrow from "../assets/left-arrow.svg";
import "../css/pages/movie.css";
const Movie = () => {
  const movieLocalStorage = JSON.parse(localStorage.getItem("movieSelected"));

  const [movieSelected, setMovieSelected] = useState(movieLocalStorage || "");

  // const movieLocatStorage = () => {
  //   const movieData = JSON.parse(localStorage.getItem(movieSelected));
  //   setMovieSelected(movieData);
  // };
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={leftArrow} alt="left arrow to exit the movie" />
          </Link>
        </nav>
      </header>
      <main className="movie__container">
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieSelected.poster_path}`}
            alt=""
          />
          <h1>{movieSelected.title}</h1>
        </section>

        <section>
          <p>{movieSelected.release_date}</p>
          <p>{movieSelected.overview}</p>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Movie;
