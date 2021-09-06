import React from "react";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };


  // Fetchinig Movies from API
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ isLoading: false, movies })
  } // API에서 data-data에 영화 데이터가 있음

  componentDidMount() {
    this.getMovies(); // 밑에 렌더 되기 전에 함수 호출
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;