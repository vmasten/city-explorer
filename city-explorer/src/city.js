import React from 'react';

class City extends React.Component {
  constructor(props) {
  super(props);

  }

  render() {
    return(
      <>
      <h2>{this.props.location.display_name}</h2>
      <h3>{this.props.location.lat}</h3>
      <h3>{this.props.location.lon}</h3>
      </>
    )
  }
}

export default City;

