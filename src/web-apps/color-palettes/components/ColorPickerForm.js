import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from "../style/ColorPickerFormStyles";


class ColorPickerForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentColor: "teal",
			newColorName: "",
		};
	}
	handleChangeComplete = (color) => {
		this.setState({ currentColor: color.hex });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handelAddNewColor = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addNewColor(newColor);
    this.setState({newColorName: ""})
	};

	componentDidMount() {
		ValidatorForm.addValidationRule("isColorName", (value) => {
			return this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			);
		});

		ValidatorForm.addValidationRule("isColorUnique", (value) => {
			return this.props.colors.every(
				({ color }) => color !== this.state.currentColor
			);
		});
	}

	render() {
		const { isPaletteFull, addNewColor, classes } = this.props;
		return (
			<div className={classes.root}>
				<ChromePicker
					color={this.state.currentColor}
					onChangeComplete={this.handleChangeComplete}
					className={classes.picker}
				></ChromePicker>
				<ValidatorForm onSubmit={this.handelAddNewColor}>
					<TextValidator
						placeholder="Color Name"
						variant="filled"
						className={classes.colorNameInput}
						name="newColorName"
						value={this.state.newColorName}
						onChange={this.handleChange}
						validators={["required", "isColorName", "isColorUnique"]}
						errorMessages={[
							"This field is required",
							"Color name must be unique !",
							"Color already used !",
						]}
					/>
					<Button
						className={classes.addColor}
						color="primary"
						variant="contained"
						type="submit"
						disabled={isPaletteFull}
						style={{
							backgroundColor: isPaletteFull ? "gray" : this.state.currentColor,
						}}
					>
						{isPaletteFull ? "Palette Full!" : "Add Color"}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}
export default withStyles(styles)(ColorPickerForm);
