/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "moWuFKv1ZKBvQ8vCtt"
    };
    this.search("");
  }

  search = (query) => {
    giphy('jZuxU5ptFi4k3wgL4B0WlsOJJZcM93oC').search({
      q: query,
      rating: 'g',
      limit: 18
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  };


  render() {
    return (
      <div>
        <div className="left-screen">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-screen">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
