import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Img1 from "./Image/joker2.jpg";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>All News Headlight</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitem
              title="My title"
              Discription="First Nothing"
              Imgul={Img1}
            />
          </div>
          <div className="col-md-4">
            <Newsitem
              title="My title"
              Discription="First Nothing"
              Imgul={Img1}
            />
          </div>
          <div className="col-md-4">
            <Newsitem
              title="My title"
              Discription="First Nothing"
              Imgul={Img1}
            />
          </div>
        </div>
      </div>
    );
  }
}
