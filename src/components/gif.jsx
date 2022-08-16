/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
