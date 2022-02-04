import PropTypes from "prop-types";

function Movie({img, title, rating, summary, genres}){
    return(
    <div>
        <img src={img} />
        <h2>{title}</h2>
        <h3>Rating: {rating} ❤️</h3>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => 
          <li key={genre}>{genre}</li>)}
        </ul>
      </div>);
}

Movie.propType = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}
export default Movie;