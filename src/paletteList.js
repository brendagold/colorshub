import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./miniPalette";
import styles from "./styles/PaletteListStyles"



class PaletteList extends Component {
  state = {};

  goToPalette(id) {
    console.log("Hi");
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Colors Hub</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <p>
                <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
