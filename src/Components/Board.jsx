import React, { Component } from "react";
import Card from "./Card.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      loading: false,
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onClick = () => {
    this.setState({ loading: true });
    const url = `https://hn.algolia.com/api/v1/search?query=${
      this.state.query
    }`;
    if (this.state.query.length > 0) {
      fetch(url)
        .then(res => res.json())
        //.then(x => console.log(x.hits[0]))
        .then(data => this.setState({ hits: data.hits, loading: false }));
    }
  };

  render() {
    return (
      <div className="board">
        <input
          placeholder="What would you like to search for?"
          onChange={this.handleChange}
          type="text"
        />
        <button onClick={this.onClick}>Go!</button>

        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <Card hits={this.state.hits} />
        )}
      </div>
    );
  }
}

export default Board;
