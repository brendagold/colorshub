import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./miniPalette";

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div className="paletteList">
          <MiniPalette />
        {palettes.map((palette) => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
