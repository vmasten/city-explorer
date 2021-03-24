import React from 'react';
import Weather from './Weather.js'

class City extends React.Component {

  render() {
    return(
      <>
      <h2>City: {this.props.location.display_name}</h2>
      <h3>Latitude: {this.props.location.lat}</h3>
      <h3>Longitude: {this.props.location.lon}</h3>
      <img src={this.props.imgSrc} alt={this.props.location.display_name}></img>
      <Weather location={this.props.location}/>
      </>
    )
  }
}

export default City;

