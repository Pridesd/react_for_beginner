import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import movie_styles from "./movie.module.css";
function Movie({id, img, title, rating, summary, genres}){
    return(
    <div className={movie_styles.item}>
        <img src={img} />
        <div>
          <h2>
            <Link className={movie_styles.link} to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3>Rating: {rating} ❤️</h3>
          <p>{summary.length > 250 ? `${summary.slice(0, 250)} ...` : summary}</p>
          <ul>
            {genres.map((genre) => 
            <li key={genre}>{genre}</li>)}
          </ul>
        </div>
      </div>);
}

Movie.propType = {
    id: PropTypes.number,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}
export default Movie;