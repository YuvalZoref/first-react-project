/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
      console.log(this.props.id);
    }
  }

  render() {
    const src = `https://i.giphy.com/media/${this.props.id}/200.gif`;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
