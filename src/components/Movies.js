import React from 'react';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns'
import Error from './error.js'
import Movie from './Movie.js'


class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      movies: [],
      displayError: false,
    }
  }

  componentDidMount = async() => {
    const movieParams = {city: this.props.city}
    const SERVER = `${process.env.REACT_APP_SERVER}`;
    try {
      const movieRaw = await axios.get(`${SERVER}/movies`, {params: movieParams});
      const movieData = movieRaw.data;
      this.setState({ movies: movieData })
    }catch(error) {
      console.error(error);
      this.setState({displayError: true, thisError: error});
    }
  };

  render() {
    return(
      <>
      <h2>Movies!</h2>
      <CardColumns>
          {this.state.movies.map((movie, index) => (
            <Movie 
            index={index} 
            title={movie.title} 
            image_url={movie.image_url} 
            overview={movie.overview} 
            released_on={movie.released_on}
            />))}
      </CardColumns>
        {this.state.displayError && 
          <>
          <Error currentError={this.state.thisError}/>
          </>
        } 
      </>
    )
  }
}

export default Movies;