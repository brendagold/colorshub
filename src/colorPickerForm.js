import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Button, colors } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";

const styles = {
 picker: {
     width: "100% important",
     marginTop: "2rem"
 },
 addColor: {
     width: "100%",
     marginTop: "1rem",
     fontSize: "1rem"
 },
 colorNameInput: {
     width: "100%",
     height: "70px"
 }
}

class ColorPickerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: "",
      currentColor: "teal",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({newColorName: ""})
  }
  render() {
    const { paletteIsFull, classes } = this.props;
    const {currentColor, newColorName} = this.state
    return (
      <div>
        <ChromePicker
          color={this.state.currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />

        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            onChange={this.handleChange}
            name="newColorName"
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            className={classes.colorNameInput}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!",
            ]}
          />

          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.addColor}
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
            }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
