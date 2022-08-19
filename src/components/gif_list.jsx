/* eslint-disable react/destructuring-assignment, react/prefer-stateless-function */
import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    // eslint-disable-next-line max-len
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
