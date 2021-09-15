import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "../../style/DraggableColorBoxStyles";


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
