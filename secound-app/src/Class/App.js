import React, { Component } from "react";
import Navbar from "./navbar";
import News from "./News";
import Map from "./Map";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {/* <News /> */}
        <Map />
      </div>
    );
  }
}
