import React, { Component } from "react";
import img1 from "./Image/1.jpg";
import img2 from "./Image/2.jpg";
import img3 from "./Image/3.jpg";
import img4 from "./Image/4.jpg";
export default class map extends Component {
  render() {
    const List = [
      {
        img: img1,
        title: "Friend",
        Decripe: "Something",
      },
      {
        img: img2,
        title: "Not Friend",
        Decripe: "Something",
      },
      {
        img: img3,
        title: "Best Friend Friend",
        Decripe: "Something",
      },
      {
        img: img4,
        title: "No Friend",
        Decripe: "Something",
      },
    ];
    return (
      <div className="container my-3">
        <div className="row">
          {List.map((Key) => {
            const { img, title, Decripe } = Key;
            return (
              <div className="col-md-4">
                {/* <img src={img} alt="There is A Image" sizes="20px" srcset="" /> */}
                <img src={img} alt="There is A image" width="100px" />
                <h3>{title}</h3>
                <h3>{Decripe}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
