import React, { Component } from "react";

export default class TextArea extends Component {
  state = {
    value: "",
  };
  HandleChange = (e) => {
    this.setState({ value: e.target.value.toUpperCase() });
  };

  render() {
    return (
      <div>
        <h3>Enter Text</h3>
        <textarea
          onChange={this.HandleChange}
          value={this.state.value}
          cols="30"
          rows="10"
          placeholder="Enter Some Text At Here"
        ></textarea>
      </div>
    );
  }
}
