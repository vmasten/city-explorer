import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class DailyWeather extends React.Component {

  render() {
    return (
      <ListGroup.Item key={this.props.key}>
      {this.props.date} {this.props.description}
      </ListGroup.Item>
    )
  }


}

export default DailyWeather;
