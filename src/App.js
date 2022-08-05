import React, { Component } from "react";

export default class App extends Component {
  state = {
    movie: "",
    movieList: []
  };
  handleChange = (event) => {
    this.setState({
      movie: event.target.value
    });
  };

  send = () => {
    if (this.state.movie !== "") {
      this.setState({
        movieList: this.state.movieList.concat({
          movie: this.state.movie,
          id: Date.now()
        }),
        movie: ""
      });
    }
  };

  remove = (id) => {
    this.setState({
      movieList: this.state.movieList.filter((item) => item.id !== id)
    });
  };
  removeall = (id) => {
    this.setState({
      movieList: this.state.movieList.filter((item) => item.movieList)
    });
  };

  render() {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <input onChange={this.handleChange} value={this.state.movie} />
        <button onClick={this.send}>Send</button>
        <button onClick={() => this.removeall()}>All</button>
        {this.state.movieList.map((item) => (
          <div>
            <ul>
              <li>{item.movie}</li>
            </ul>
            <button onClick={() => this.remove(item.id)}>X</button>
          </div>
        ))}
      </form>
    );
  }
}
