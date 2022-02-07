import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Movie from "../components/Movie";
import styles from "./home.module.css";

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
      <h1 className={styles.header}>Movie App</h1>
      {loading ? <h1 className={styles.loading}>Loading...</h1>:
        <div className={styles.container}>
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