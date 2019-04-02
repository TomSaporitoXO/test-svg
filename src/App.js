import React, { Component } from "react";

import Person from "./Person";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 0,
      pigment: 2,
      party: 1,
      size: 305
    };
  }

  updatePerson = (value, key) => this.setState({ [key]: parseInt(value) });

  render() {
    const _props = { ...this.state };
    return (
      <div className="App">
        <Person {..._props} />

        <div>
          Pigment:
          <input
            onChange={e => this.updatePerson(e.target.value, "pigment")}
            type="number"
            max="2"
            min="0"
            value={this.state.pigment}
          />
          Party:
          <input
            onChange={e => this.updatePerson(e.target.value, "party")}
            type="number"
            max="1"
            min="0"
            value={this.state.party}
          />
          Sex:
          <input
            onChange={e => this.updatePerson(e.target.value, "sex")}
            type="number"
            max="1"
            min="0"
            value={this.state.sex}
          />
          Size:
          <input
            onChange={e => this.updatePerson(e.target.value, "size")}
            type="number"
            max="800"
            min="300"
            value={this.state.size}
          />
        </div>
      </div>
    );
  }
}

export default App;
