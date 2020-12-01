import React, { Component } from 'react';


class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(this)
    this.props.searchFunction(event.target.value)
  }
  render() {
    return (
      <input type="text" className="form-control search-bar" onChange={this.handleUpdate}/>
    );
  }
};

export default SearchBar
