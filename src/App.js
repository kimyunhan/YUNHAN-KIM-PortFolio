import React, { Component } from 'react';

import './App.css';
// import {css} from '@emotion/core';
// import {ClipLoader} from "react-spinners";
import Movie from './Movie.js';




class App extends Component {

  state = {}//data 추가되었는지?

  componentWillMount() {
    console.log("생성준비");
  }

  componentDidMount() {
    console.log("")
    this._getMovies();  
  }
  _renderMovies = () => {


    const movies = this.state.movies.map((movie) => {

      console.log(movie)

      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis} />
    })
    return movies
  }

//callAPI Function 완료 후 수행
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({//반드시 setstate 사용
      movies

    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json/sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies) //_getMovies 의 const movies 변수에 최종적으로  return 되는 값 
      .catch(err => console.log(err))
  }






  render() {//state 변경되어 재실행 됨
    console.log("start render");
    return (
      <div className="App">

        {this.state.movies ? this._renderMovies() : 'Loading'}

      </div>
    );

  }
}
export default App;

