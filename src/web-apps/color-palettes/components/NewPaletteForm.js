import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./hooks/DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import seedColors from '../seedColors';
import styles from "../style/NewPaletteFormStyles"


class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20,
	};
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			currentColor: "",
			colors: seedColors[0].colors,
		};
	}
	clearColors = () => {
		this.setState({ colors: [] });
	};

	addRandomColor = () => {

		const allColors = this.props.palettes
			.map((palette) => palette.colors)
			.flat();
		let randomColor;
		let colorIsInPalette = true;
		
		while (colorIsInPalette) {
		 let randomNumber = Math.floor(Math.random() * allColors.length);
			randomColor = allColors[randomNumber];
			colorIsInPalette = this.state.colors.some(color => color.name === randomColor.name);
		}
		this.setState({ colors: [...this.state.colors, randomColor] });
	};

	handleChangeComplete = (color) => {
		this.setState({ currentColor: color.hex });
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	savePalette = (newPalette) => {
		newPalette.id = newPalette.paletteName
			.toLocaleLowerCase()
			.replace(/ /g, "-");
		newPalette.colors = this.state.colors;
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	};

	addNewColor = (newColor) => {
		this.setState({
			colors: [...this.state.colors, newColor],
			newColorName: "",
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	removeColorBox = (colorName) => {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const isPaletteFull = colors.length >= maxColors;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={this.state.open}
					palettes={palettes}
					savePalette={this.savePalette}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h4" gutterBottom>
							Design Your Palette
						</Typography>

						<div className={classes.buttons}>
							<Button
								onClick={this.clearColors}
								variant="contained"
								color="secondary"
								className={classes.button}
							>
								Clear Palette
							</Button>
							<Button
								onClick={this.addRandomColor}
								variant="contained"
								color="primary"
								disabled={isPaletteFull}
								className={classes.button}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm
							isPaletteFull={isPaletteFull}
							addNewColor={this.addNewColor}
							colors={this.state.colors}
							className={classes.button}
						/>
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						axis="xy"
						onSortEnd={this.onSortEnd}
						colors={colors}
						removeColorBox={this.removeColorBox}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
