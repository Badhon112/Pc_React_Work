import React, { Component } from "react";
import Navbar from "./navbar";
// import News from "./News";
// import Map from "./Map";
import Map2 from "./Map2";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {/* <News /> */}
        {/* <Map /> */}
        <Map2 />
      </div>
    );
  }
}
