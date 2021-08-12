import React, { Component } from "react";
import ColorBox from "./colorBox";
import './palette.css'

class Palette extends Component {
  render() {
      let colors = this.props.colors
    const colorBoxes = colors.map((color) => 
      <ColorBox background={color.color} name={color.name} />
    );
    
    return (
      <div className="palette">
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
