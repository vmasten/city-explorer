import React from 'react';
import axios from 'axios';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Error from './error.js'


class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      movies: [],
      displayError: false,
      defaultImg: 'https://placekitten.com/200/300'
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
            <Card key={index}> 
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title> 
            <Card.Img src={movie.image_url} alt={movie.title} onError={(e)=>{e.target.onerror = null; e.target.src=`${this.state.defaultImg}`}}/>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>Original release date: {movie.released_on}</Card.Text>
            </Card.Body>
            </Card>
          ))}
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