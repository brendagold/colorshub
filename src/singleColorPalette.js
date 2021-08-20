import React, { Component } from "react";
import ColorBox from "./colorBox";
import NavBar from "./navbar";
import PaletteFooter from "./paletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const {paletteName, emoji} = this.props.palette
    console.log(this.props.palette)
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="palette">
        <NavBar handleChange={this.changeFormat} showingAllColors={false}/>
        <h1>Single Color Palette</h1>
        <div className="palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
