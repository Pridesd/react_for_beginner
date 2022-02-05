import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

function Detail(){
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.data);
            setDetail(json.data.movie);
            setLoading(false);
        })
    }, []);
    return (
    <div>
        <h2><Link to="/">home</Link></h2>
        {loading ? <h1>Loading...</h1>:
        <div> 
          <div>
            <Movie id={detail.id} img={detail.medium_cover_image} title={detail.title_long} rating={detail.rating} summary={detail.description_intro} genres={detail.genres} />
          </div>)
        </div>
      }
    </div>);
}

export default Detail;