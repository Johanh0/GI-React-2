import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchPopularMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzY1NTU3YzkxM2U1NzUxZTczM2ZjOGFmZDcxYzQ4YiIsIm5iZiI6MTczNDM3NTU0OS4xMTAwMDAxLCJzdWIiOiI2NzYwNzg3ZDM0NDc1ZTEzNGM5MjhlMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Kv8CRE41Ua4eKK1nC0YFZcyWG5onSWy2O2Zsfs3whrc",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        return console.log("Something went wrong");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzY1NTU3YzkxM2U1NzUxZTczM2ZjOGFmZDcxYzQ4YiIsIm5iZiI6MTczNDM3NTU0OS4xMTAwMDAxLCJzdWIiOiI2NzYwNzg3ZDM0NDc1ZTEzNGM5MjhlMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Kv8CRE41Ua4eKK1nC0YFZcyWG5onSWy2O2Zsfs3whrc",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchMovies = await fetchMovies();
    setMovies(searchMovies);
  };

  const saveMovieSelected = (id) => {
    const movieSelected = movies.find((movie) => movie.id === id);
    // Save in the localStorage
    localStorage.setItem("movieSelected", JSON.stringify(movieSelected));
    navigate("/movie");
    console.log(movieSelected);
  };

  useEffect(() => {
    (async function fetchInitalMovies() {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies.results);
    })();
  }, []);

  return (
    <>
      <header>
        <Search
          onInputValue={(e) => setInputValue(e.target.value)}
          onSearch={(e) => handleSearch(e)}
          inputValue={inputValue}
        />
      </header>
      <main className="card__container">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            imgUrl={movie.poster_path}
            movieTitle={movie.title}
            onSelectCard={() => saveMovieSelected(movie.id)}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
