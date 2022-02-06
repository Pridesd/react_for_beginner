import PropTypes from "prop-types";
import { BrowserRouter as Link } from "react-router-dom";
function Movie({id, img, title, rating, summary, genres}){
    return(
    <div>
        <img src={img} />
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <h3>Rating: {rating} ❤️</h3>
        <p>{summary.length > 250 ? `${summary.slice(0, 250)} ...` : summary}</p>
        <ul>
          {genres.map((genre) => 
          <li key={genre}>{genre}</li>)}
        </ul>
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