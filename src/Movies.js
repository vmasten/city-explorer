import React from 'react';
import axios from 'axios';
import Error from './error.js'

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      movies: []
    }
  }
}

export default Movies;