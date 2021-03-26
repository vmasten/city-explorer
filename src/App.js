import React from 'react';
import axios from 'axios';
import City from './components/city.js';
import Error from './components/error.js';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      location:{},
      searchCity: '',
      imgSrc: '',
      displayResults: false,
      displayError: false,
      thisError: {}
    }
  }


getLocationInfo = async(e) => {
  e.preventDefault();
  try {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchCity}&format=json`;
    
    const location = await axios.get(url);
    const locationDetails = location.data;
    
    this.setState({
      location: locationDetails[0],
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationDetails[0].lat},${locationDetails[0].lon}&zoom=13`

  });
  }catch(error){
    console.error(error);
    this.setState({displayError: true, thisError: error});

  }
}
render() {
  return(
    <Container className="pt-4">
    <Form onSubmit={this.getLocationInfo} >
      <input onChange={(e) => this.setState({ searchCity: e.target.value })} placeholder="city"/>
      <Button size="sm" className="ml-2" type="submit">Explore!</Button>
    </Form>
    <h1>City Explorer</h1>
    {this.state.displayResults &&
      <>
        <City location={this.state.location} imgSrc={this.state.imgSrc} city={this.state.searchCity}/>
      </>
    }
    {this.state.displayError && 
      <>
      <Error currentError={this.state.thisError}/>
      </> 
    }
    </Container>
  )
}

}

export default App;