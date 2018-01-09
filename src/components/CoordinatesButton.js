// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  findClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.findClick}>Find Mouse</button>;
  }
}

export default CoordinatesButton;
