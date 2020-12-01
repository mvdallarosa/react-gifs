import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: [],
      selectedGifId: null
    }
  }

  // Search with options using callback
  search = (query) => {
    giphy("8offqLznFOZpgG58rThNzK5HjpmR31Yy").search({
        q: query,
        rating: 'g'
    }, (err, res) => {
        this.setState({
          gifs: res.data
        })
    });
  }

  gif = (id) => { this.setState({selectedGifId: id})}

  render() {
    return (
      <div className="flex">
        <div className="left-side">
          <SearchBar searchFunction={this.search}/>
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-side">
          <GifList gifs={this.state.gifs} gifFunction={this.gif}/>
        </div>
      </div>
    );
  }
};

export default App
