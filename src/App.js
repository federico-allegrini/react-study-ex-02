import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    text: "My-Text",
  };

  inputChangedHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.text.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ text: updatedText });
  };

  render() {
    const charLists = this.state.text.split("").map((ch, index) => {
      return (
        <Char
          char={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <h2>React Lists and Conditionals Exercise</h2>
        <input
          type="text"
          value={this.state.text}
          onChange={this.inputChangedHandler}
        ></input>
        <p>{this.state.text.length}</p>
        <Validation length={this.state.text.length} />
        <p>{charLists}</p>
      </div>
    );
  }
}

export default App;
