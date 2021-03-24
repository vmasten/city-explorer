import React from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Error from './error.js'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      weather: [],
      displayError: false
    }
  }

  componentDidMount = async() => {
    const SERVER = 'https://polar-plains-24419.herokuapp.com';
    try {
      const weatherRaw = await axios.get(`${SERVER}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`)
      const weatherData = weatherRaw.data;
      this.setState({ weather: weatherData })
      }catch(error) {
        console.error(error);
        this.setState({displayError: true, thisError: error});
    }
  };

  render() {
    return(
      <>
        <h2 className="pt-3">(Fake) Weather</h2>
        <ListGroup variant="flush" className="w-50">
          {this.state.weather.map((day, index) => (
            <ListGroup.Item eventKey={index}> {day.date} {day.description}</ListGroup.Item>
          ))}
        </ListGroup>
        {this.state.displayError && 
          <>
          <Error currentError={this.state.thisError}/>
          </> 
        }
      </>
    )
  }
}

export default Weather;