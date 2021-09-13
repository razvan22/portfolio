import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-0.5vh",
		"&:hover svg": {
			color: "white",
			transform: "scale(1.3)",
		},
	},
	boxContent: {
		position: "absolute",
		width: "100%",
		left: "0px",
		bottom: "0px",
		color: "rgb(0, 0, 0, 0.5)",
		padding: "10px",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontWeight: "500",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between",
	},
	deleteIcon: {
		transition: "all 0.3s ease-in-out",
	},
};

const DraggableColorBox = SortableElement((props) => {
	const { classes, removeColorBox, name } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: props.color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={removeColorBox} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
