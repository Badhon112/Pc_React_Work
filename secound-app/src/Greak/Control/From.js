import React, { Component } from "react";

export default class From extends Component {
  state = {
    value: "",
  };
  handlchange = (e) => {
    // console.log(e.target.value);
    // const NewName=e.target.value;
    this.setState({ value: e.target.value.toUpperCase().substr(0, 14) });
  };
  render() {
    return (
      <div>
        <form>
          <h2>Control By React</h2>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handlchange}

            // placeholder="Enter Some Text"
          />
        </form>
      </div>
    );
  }
}
