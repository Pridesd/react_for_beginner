import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => 
  fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
  .then(response => response.json())
  .then(json => {
    setMovies(json.data.movies);
    setLoading(false);;
  }), []);
  return (
    <div>
      {loading ? <h1>Loading...</h1>:
        <div>
          {movies.map((movie) => 
          <div key={movie.id}>
            <Movie id={movie.id} img={movie.medium_cover_image} title={movie.title_long} rating={movie.rating} summary={movie.summary} genres={movie.genres} />
          </div>)}
        </div>
      }
    </div>
  );
}

export default Home;