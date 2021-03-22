import React from 'react';
import axios from 'axios';
import City from './city.js'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      location:{},
      searchCity: '',
      imgSrc: '',
      displayResults: false
    }
  }

getLocationInfo = async(e) => {
  e.preventDefault();
  const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchCity}&format=json`;
  
  const location = await axios.get(url);
  const locationDetails = location.data;
  
  this.setState({
    location: locationDetails[0],
    displayResults: true,
    imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationDetails[0].lat},${locationDetails[0].lon}&zoom=13`
  
  });
}

render() {
  return(
    <>
    <form onSubmit={this.getLocationInfo} >
      <input onChange={(e) => this.setState({ searchCity: e.target.value })} placeholder="city"/>
      <button type="submit">Explore!</button>
    </form>
    <h1>City Explorer</h1>
    {console.log(this.state.displayResults)}
    {this.state.displayResults &&
      <>
        <City location={this.state.location}/>
      </>
    }
    </>
  )
}

}

export default App;