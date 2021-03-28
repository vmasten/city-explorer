import React from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Error from './error.js'
import DailyWeather from './DailyWeather.js'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      weather: [],
      displayError: false
    }
  }

  componentDidMount = async() => {
    const SERVER = `${process.env.REACT_APP_SERVER}`;
    try {
      const weatherRaw = await axios.get(`${SERVER}/weather`, { params: { lat: this.props.location.lat, lon: this.props.location.lon }})
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
        <h2 className="pt-3">5 Day Forecast!</h2>
        <ListGroup variant="flush" className="w-50">
          {this.state.weather.map((day, index) => (
            <DailyWeather
            key={index} 
            index={index} 
            date={day.date} 
            description={day.description}
            />))}
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