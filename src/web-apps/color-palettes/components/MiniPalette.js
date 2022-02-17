import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../style/MiniPaletteStyles";

import DeleteIcon from "@mui/icons-material/Delete";

function MiniPalette(props) {
	const classes = styles();
	const { paletteName, emoji, colors, openDialog, id } = props;
	const colorBoxes = colors.map((color) => (
		<div
			key={color.color}
			className={classes.miniColor}
			style={{ backgroundColor: color.color }}
		></div>
	));

	function handleDeletePalette(e) {
		e.stopPropagation();
		openDialog(id);
	}

	return (
		<div className={classes.root} onClick={props.goToPalette}>
			<DeleteIcon
				fontSize="large"
				className={classes.deleteIcon}
				onClick={handleDeletePalette}
			/>
			<div className={classes.colors}>{colorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
