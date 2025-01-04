import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./searchIcon.svg";
import MovieCard from "./movieCard";
const API_URL = "https://www.omdbapi.com?apikey=b6536d76";

/*
Poster:"https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
Title:"Batman Begins"
Type:"movie"
Year:"2005"
imdbID:"tt0372784"
*/

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spider man");
  }, []);

  return (
    <div className="w-3/4 mx-auto h-full p-5">
      <h1 className="text-center text-3xl font-bold text-white">Movie Land</h1>
      {/*Search bar*/}
      <div className="my-12 mx-auto w-2/3 border border-white rounded-full flex">
        <input
          className="w-[92%] font-medium tracking-wide outline-0 px-4 py-2 bg-gray-200 text-black rounded-l-full"
          type="text"
          name="search"
          id="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="bg-gray-200 w-[8%] rounded-r-full flex justify-center items-center">
          <img
            width={20}
            height={20}
            src={searchIcon}
            alt="Search icon"
            className="cursor-pointer"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies.length > 0 ? (
        <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <h3 className="text-white text-center">No movie found!</h3>
      )}
    </div>
  );
}

export default App;
