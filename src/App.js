import React, { Component } from 'react';

import './App.css';
// import {css} from '@emotion/core';
// import {ClipLoader} from "react-spinners";
import Movie from './Movie.js'; //component 추가햇으니 jsx와 같이 <Movie/>사용가능
import axios from "axios";



class App extends Component {

  state = {
    isLoading: true,
    movies: []

  }//data 추가되었는지?
  componentWillMount() {
    console.log("생성준비");
  }

  //axios=fetch json으로 데이터get
  _getMovies = async () => {
    const { data: {
      data: { movies }
    } } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this._getMovies();
  }

  render() {//state 변경되어 재실행 됨
    console.log("start render");
    const { isLoading, movies } = this.state;

    return (
      <div>
        <section className="container"></section>
        {isLoading ?
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
          : 
          <div className="movies">
           {movies.map(movie => (
             <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
            
            </div>
          }

      </div>
    );

  }
}

export default App;

