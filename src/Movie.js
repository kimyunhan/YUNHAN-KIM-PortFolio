import React from 'react'; //반드시 써줘야 movie라는 component를 사용할수 있다.
import './Movie.css';
import PropTypes from 'prop-types'

function Movie({ title, poster, summary, year, genres }) {
    return (
        <div className="movie">

            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre,index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0,140)}...</p>
                
            </div>
        </div>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie//export해줘야 사용가능하다.