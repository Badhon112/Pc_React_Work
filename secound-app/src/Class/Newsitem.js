import React, { Component } from "react";
// import Img1 from "./Image/joker2.jpg";

export default class Newsitem extends Component {
  render() {
    let { title, Discription, Imgul } = this.props;
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={Imgul} className="card-img-top" alt="There is a Image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{Discription}</p>
            <a href="/NewsLink" className="btn btn-primary">
              Read More
            </a>

            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}
