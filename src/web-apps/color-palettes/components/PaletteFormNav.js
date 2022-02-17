import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "../style/PaletteFormNavStyles";


class PaletteFormNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			newPaletteName: "",
			formShowing: false
		};
	
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	showForm = () => {
		this.setState({formShowing: true})
	}

	hidePaletteForm = () => {
		this.setState({formShowing: false})
	}

	render() {
		const { classes, open, savePalette } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.props.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<AddToPhotosIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Create A Palette
						</Typography>
					</Toolbar>
					<div className={classes.navButtons}>
						<Link to="/color-palettes">
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
							>
								GO Back
							</Button>
						</Link>
						<Button
							variant="contained"
							color="primary"
							onClick={this.showForm}
							className={classes.button}
						>
							Save
						</Button>
					</div>
				</AppBar>
				{this.state.formShowing && (
					<PaletteMetaForm
						savePalette={savePalette}
						palettes={this.props.palettes}
						hidePaletteForm={this.hidePaletteForm}
					/>
				)}
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
