import React, { Component } from 'react';


class Gif extends Component {
  handleClick = (event) => {
    this.props.gifFunction(this.props.id)
  }
  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/100w.webp?cid=ecf05e47pskngdgguuq4jzsq2nbdv72xpsmkif89cnyhjzin&rid=200w.gif`
    return (
      <div className="gif-container">
        <img className="gif" src={src} alt="" onClick={this.handleClick}/>
      </div>
    );
  }
};

export default Gif
