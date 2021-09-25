import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {  //비동기적 함수 실행을 위함(async-await)
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");    //가져올 API의 URL
    //axios.get() 메소드가 완료될 때까지 기다린다.
    console.log(movies); //movies.data.data.movies라고 할 걸 단축시켜준다.
    this.setState({ movies: movies, isLoading: false });
  }

  componentDidMount() {  //render된 직후 호출되는 component life cycle
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;   //isLoading을 사용할 때마다 this.state.을 매번 붙이지 않기 위해
    return (
    <section className="container">
      {isLoading ?(
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.id}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        ))}
        </div>
        
    )}
    </section>);
  }
}



export default App;
