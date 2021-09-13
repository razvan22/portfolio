import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../style/MiniPaletteStyles";


function MiniPalette(props) {
	const { classes, paletteName, emoji, colors} = props;
	const colorBoxes = colors.map((color) => (
		<div key={color.color} className={classes.miniColor} style={{backgroundColor: color.color}}></div>
	));

	return (
		<div className={classes.root} onClick={props.goToPalette}>
			<div className={classes.colors}>{colorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
