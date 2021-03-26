import React from 'react';
import Card from 'react-bootstrap/Card'

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      defaultImg: 'https://placekitten.com/200/300'
    }
  }

  render() {
    return (
      <Card key={this.props.index}> 
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title> 
            <Card.Img src={this.props.image_url} 
            alt={this.props.title} 
            onError={(e)=>{e.target.onerror = null; e.target.src=`${this.state.defaultImg}`}}/>
            <Card.Text>{this.props.overview}</Card.Text>
            <Card.Text>Original release date: {this.props.released_on}</Card.Text>
            </Card.Body>
            </Card>
    )
  }
}

export default Movie;