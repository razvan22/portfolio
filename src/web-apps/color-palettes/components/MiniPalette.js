import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	root: {
		border: "1px solid black",
		backgroundColor: "white",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
	},
	colors: {
		backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius:"5px",
    overflow:"hidden"
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative",
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem",
	},
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-0.4vh"
  }
};

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors, id} = props;
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
