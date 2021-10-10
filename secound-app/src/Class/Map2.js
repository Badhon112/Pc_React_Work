import React, { Component } from "react";

export default class Map2 extends Component {
  state = {
    Array: [
      { Name: "Badhon Biswas", id: 101, City: "Rajbari" },
      { Name: "Durjoy Achary", id: 102, City: "Taingle" },
      { Name: "Mahabub Hoq", id: 103, City: "Kustia" },
      { Name: "Ayesha", id: 104, City: "Savar" },
      { Name: "Mafus Bhai", id: 105, City: "Ponchogor" },
      { Name: "Etc", id: 106, City: "Etc" },
    ],
    IsLogin: false,
  };
  render() {
    const Arr = this.state.Array.map((Value) => {
      return (
        <div key={Value.id} className="card">
          <div className="card-body">
            <h3>id: {Value.id}</h3>
            <h5 className="card-title"> Student Name: {Value.Name}</h5>
            <p className="card-text">City Name: {Value.City}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <ul>{Arr}</ul>
      </div>
    );
  }
}
