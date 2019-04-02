import React, { Component, Fragment } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sex: this.props.sex,
        party: this.props.party,
        pigment: this.props.pigment,
        size: this.props.size,
    }
  }

  componentWillReceiveProps(props){
      this.setState(props)
  }

  getPartyColor = () => {
    switch (this.state.party) {
      case 0:
        return "blue";
      case 1:
        return "red";
      default:
        return "red";
    }
  };

  getMale = () => {
    return (
      <Fragment>
        <g id="layer101" fill="#000000" stroke="none">
          <path d="M3520 7360 l0 -1920 -160 0 -160 0 0 640 0 640 -480 0 -480 0 0 -960 0 -960 160 0 160 0 0 -160 0 -160 320 0 320 0 0 -160 0 -160 160 0 160 0 0 -320 0 -320 -160 0 -160 0 0 -1440 0 -1440 160 0 160 0 0 -160 0 -160 1600 0 1600 0 0 160 0 160 160 0 160 0 0 1440 0 1440 -160 0 -160 0 0 320 0 320 160 0 160 0 0 160 0 160 320 0 320 0 0 160 0 160 160 0 160 0 0 1120 0 1120 -480 0 -480 0 0 -800 0 -800 -160 0 -160 0 0 1760 0 1760 -640 0 -640 0 0 -640 0 -640 -320 0 -320 0 0 800 0 800 -640 0 -640 0 0 -1920z" />
        </g>
        <g id="layer102" fill={this.getPigment()} stroke="none">
          <path d="M3520 7040 l0 -1600 -160 0 -160 0 0 640 0 640 -480 0 -480 0 0 -960 0 -960 160 0 160 0 0 -160 0 -160 320 0 320 0 0 -160 0 -160 160 0 160 0 0 -320 0 -320 -160 0 -160 0 0 -1120 0 -1120 320 0 320 0 0 -160 0 -160 1280 0 1280 0 0 160 0 160 320 0 320 0 0 1120 0 1120 -160 0 -160 0 0 320 0 320 160 0 160 0 0 160 0 160 320 0 320 0 0 160 0 160 160 0 160 0 0 1120 0 1120 -480 0 -480 0 0 -800 0 -800 -160 0 -160 0 0 1280 0 1280 -640 0 -640 0 0 -160 0 -160 -320 0 -320 0 0 480 0 480 -640 0 -640 0 0 -1600z m2240 -4000 l0 -160 -640 0 -640 0 0 160 0 160 640 0 640 0 0 -160z m-1280 -1120 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z m1600 0 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z" />
        </g>
        <g id="layer103" fill={this.getPartyColor()} stroke="none">
          <path d="M3520 7040 l0 -1600 -160 0 -160 0 0 160 0 160 -480 0 -480 0 0 -480 0 -480 160 0 160 0 0 -160 0 -160 320 0 320 0 0 -160 0 -160 1920 0 1920 0 0 160 0 160 320 0 320 0 0 160 0 160 160 0 160 0 0 960 0 960 -480 0 -480 0 0 -640 0 -640 -160 0 -160 0 0 1280 0 1280 -640 0 -640 0 0 -160 0 -160 -320 0 -320 0 0 480 0 480 -640 0 -640 0 0 -1600z" />
        </g>
        <g id="layer104" fill="#555457" stroke="none">
          <path d="M3520 7840 l0 -800 1600 0 1600 0 0 480 0 480 -640 0 -640 0 0 -160 0 -160 -320 0 -320 0 0 480 0 480 -640 0 -640 0 0 -800z" />
        </g>
      </Fragment>
    );
  };

  getFemale = () => {
    return (
      <Fragment>
        <g id="layer101" fill="#000000" stroke="none">
          <path d="M3520 8000 l0 -1280 160 0 160 0 0 -320 0 -320 -160 0 -160 0 0 -320 0 -320 -160 0 -160 0 0 640 0 640 -480 0 -480 0 0 -960 0 -960 160 0 160 0 0 -160 0 -160 800 0 800 0 0 -320 0 -320 -160 0 -160 0 0 -160 0 -160 -480 0 -480 0 0 -480 0 -480 160 0 160 0 0 -960 0 -960 1920 0 1920 0 0 960 0 960 160 0 160 0 0 480 0 480 -480 0 -480 0 0 160 0 160 -160 0 -160 0 0 320 0 320 800 0 800 0 0 160 0 160 160 0 160 0 0 1120 0 1120 -480 0 -480 0 0 -800 0 -800 -160 0 -160 0 0 320 0 320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 1120 0 1120 -640 0 -640 0 0 -640 0 -640 -320 0 -320 0 0 800 0 800 -640 0 -640 0 0 -1280z" />
        </g>
        <g id="layer102" fill="#555457" stroke="none">
          <path d="M3520 7680 l0 -960 160 0 160 0 0 -320 0 -320 -160 0 -160 0 0 -320 0 -320 -160 0 -160 0 0 640 0 640 -480 0 -480 0 0 -960 0 -960 160 0 160 0 0 -160 0 -160 800 0 800 0 0 -320 0 -320 -160 0 -160 0 0 -1120 0 -1120 320 0 320 0 0 160 0 160 640 0 640 0 0 -160 0 -160 320 0 320 0 0 1120 0 1120 -160 0 -160 0 0 320 0 320 800 0 800 0 0 160 0 160 160 0 160 0 0 1120 0 1120 -480 0 -480 0 0 -800 0 -800 -160 0 -160 0 0 320 0 320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 640 0 640 -640 0 -640 0 0 -160 0 -160 -320 0 -320 0 0 480 0 480 -640 0 -640 0 0 -960z m2240 -4000 l0 -160 -640 0 -640 0 0 160 0 160 640 0 640 0 0 -160z m-960 -1120 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z m960 0 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z" />
        </g>
        <g id="layer103" fill={this.getPartyColor()} stroke="none">
          <path d="M3520 6880 l0 -160 160 0 160 0 0 -320 0 -320 -160 0 -160 0 0 -320 0 -320 -160 0 -160 0 0 640 0 640 -480 0 -480 0 0 -960 0 -960 160 0 160 0 0 -160 0 -160 800 0 800 0 0 -320 0 -320 -160 0 -160 0 0 -1120 0 -1120 320 0 320 0 0 160 0 160 640 0 640 0 0 -160 0 -160 320 0 320 0 0 1120 0 1120 -160 0 -160 0 0 320 0 320 800 0 800 0 0 160 0 160 160 0 160 0 0 1120 0 1120 -480 0 -480 0 0 -800 0 -800 -160 0 -160 0 0 320 0 320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 160 0 160 -1600 0 -1600 0 0 -160z m2240 -3200 l0 -160 -640 0 -640 0 0 160 0 160 640 0 640 0 0 -160z m-960 -1120 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z m960 0 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z" />
        </g>
        <g id="layer104" fill={this.getPigment()} stroke="none">
          <path d="M7040 6880 l0 -160 480 0 480 0 0 160 0 160 -480 0 -480 0 0 -160z" />
          <path d="M2240 6240 l0 -480 480 0 480 0 0 480 0 480 -480 0 -480 0 0 -480z" />
          <path d="M4160 4000 l0 -160 -160 0 -160 0 0 -1120 0 -1120 320 0 320 0 0 160 0 160 640 0 640 0 0 -160 0 -160 320 0 320 0 0 1120 0 1120 -160 0 -160 0 0 160 0 160 -960 0 -960 0 0 -160z m1600 -320 l0 -160 -640 0 -640 0 0 160 0 160 640 0 640 0 0 -160z m-960 -1120 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z m960 0 l0 -320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z" />
        </g>
      </Fragment>
    );
  };

  renderPerson = () => {
    return this.renderSex();
  };

  renderSex = () => {
    switch (this.state.sex) {
      case 0:
        return this.getMale();
      case 1:
        return this.getFemale();
      default:
        return this.getMale();
    }
  };

  getPigment = () =>{
      switch (this.state.pigment){
          case 0:
            return '#eedd98';
          case 1:
            return '#ffda81';
          case 2:
            return '#614712';
          default:
            return '#614712';
      }
  }

  render() {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={`${this.state.size}px`}
        height={`${this.state.size}px`}
        viewBox="0 0 10240 10240"
        preserveAspectRatio="xMidYMid meet"
      >
        {this.renderPerson()}
      </svg>
    );
  }
}