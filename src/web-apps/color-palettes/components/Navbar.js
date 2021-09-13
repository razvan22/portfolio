import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import { Select } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import "rc-slider/assets/index.css";
import "../style/Navbar.css";
import styles from "../style/NavBarStyles";


class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: "hex", open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	}

	closeSnackbar() {
		this.setState({ open: false });
	}

	render() {
		const { level, changeLevel, hasSlider, classes } = this.props;
		const { format } = this.state;
		return (
			<nav className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to="/">Color Palette</Link>
				</div>
				{hasSlider && (
					<div>
						<span>Level: {level}</span>
						<div className={classes.Slider}>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				)}
				<div className={classes.selectContainer}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffff </MenuItem>
						<MenuItem value="rgb">RGB - #rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - #rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format Changed!</span>}
					ContentProp={{
						"aria-describedby": "message-id",
					}}
					onClose={this.closeSnackbar}
					action={
						<IconButton
							onClick={this.closeSnackbar}
							color="inherit"
							key="close"
							aria-label="close"
						>
							<Close />
						</IconButton>
					}
				></Snackbar>
			</nav>
		);
	}
}
export default withStyles(styles)(Navbar);