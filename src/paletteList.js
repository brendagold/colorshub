import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MiniPalette from "./miniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./styles/PaletteListStyles";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue, red } from "@material-ui/core/colors";

class PaletteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDeleteDialog: false,
      deletingId: ""
    }

    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.goToPalette = this.goToPalette.bind(this)
  }

  openDialog(id) {
    this.setState({openDeleteDialog: true, deletingId: id})
  }

  closeDialog() {
    this.setState({openDeleteDialog: false, deletingId: ""})
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId)
    this.closeDialog()
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;
    const {openDeleteDialog} = this.state
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Colors Hub</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout="500">
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  id={palette.id}
                  goToPalette={this.goToPalette}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog open={openDeleteDialog} aria-labelledby="delete-dialog-title" onClose={this.closeDialog} >
            <DialogTitle id="delete-dialog">Delete this Palette?</DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: blue[100], color: blue[600]}}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Delete" />
              </ListItem>
              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: red[100], color: red[600]}}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cancel" />
              </ListItem>
            </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
