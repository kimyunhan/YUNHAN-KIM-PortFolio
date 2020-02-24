import React from 'react';
import './Movie.css'; 
import PropTypes from 'prop-types'

function Movie({title,poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title}></MoviePoster>
            </div>
            
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                {genres.map((genre,index)=><MovieGenre genre={genre} key={index}/>)}

                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
                </div>
            

        </div>
    )
}
function MoviePoster({poster,alt}){
    return (
        <img  src={poster} alt={alt} title={alt} className="Movie__Poster"></img>
    )

}
function MovieGenre({genre}){
    return(
    <span className="Movie__Genres">{genre} </span>
    )
}

 
Movie.propTypes={
    title: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}
MoviePoster.propTypes={
    poster:PropTypes.string.isRequired, 
    alt:PropTypes.string.isRequired
}
MovieGenre.propTypes={
    genres:PropTypes.string.isRequired
}
export default Movie