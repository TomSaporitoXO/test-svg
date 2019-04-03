import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.button`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  background-color: ${props => props.bg || "red"};
  padding: 30px;
  animation-name: ${rotate};
  animation-duration: ${props => props.speedInSeconds}s;
  animation-play-state: ${props => {
    console.log(props);
    return props.spinning === true ? "running" : "paused";
  }};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:active {
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    padding: 29px;
    border: 16px solid #a3a3a3;
    border-top: 16px solid #3498db; /* Blue */
  }
  &:focus {
    outline: 0;
  }
`;

class SpinnerGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: true
    };
    this.domSpinner = React.createRef();
  }

  getRotation = () => {
    const st = window.getComputedStyle(this.domSpinner, null);
    const tr =
      st.getPropertyValue("-webkit-transform") ||
      st.getPropertyValue("-moz-transform") ||
      st.getPropertyValue("-ms-transform") ||
      st.getPropertyValue("-o-transform") ||
      st.getPropertyValue("transform") ||
      "FAIL";

    // With rotate(30deg)...
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    console.log("Matrix: " + tr);

    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

    const values = tr
      .split("(")[1]
      .split(")")[0]
      .split(",");
    const a = values[0];
    const b = values[1];
    // const c = values[2];
    // const d = values[3];

    const scale = Math.sqrt(a * a + b * b);

    console.log("Scale: " + scale);

    // arc sin, convert from radians to degrees, round
    // const sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // const angle = Math.round(Math.asin(sin) * (180/Math.PI));
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    console.log("Rotate: " + angle + "deg");
  };

  stopSpinner = () => {
    this.setState({ spinning: false });
  };

  render() {
    return (
      <Fragment>
        <Spinner
          type="button"
          onClick={this.stopSpinner}
          spinning={this.state.spinning}
          {...this.props}
          ref={this.domSpinner}
        />
      </Fragment>
    );
  }
}

SpinnerGame.defaultProps = {
  speedInSeconds: "2"
};

export default SpinnerGame;
