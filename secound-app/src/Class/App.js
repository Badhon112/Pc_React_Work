import React, { Component } from "react";
import Navbar from "./navbar";
import News from "./News";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <News />
      </div>
    );
  }
}
