import React from 'react';

class Error extends React.Component {
  render() {
    return(
      <>
      <h2>Ruh roh! Something broke.</h2>
      <p>{this.props.currentError.message}</p>
      </>
    )
  }
}

export default Error;