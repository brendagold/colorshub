import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="/">Colors Hub</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
