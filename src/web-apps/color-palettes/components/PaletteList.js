import React, { Component } from "react";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import styles from "../style/PaletteListStyles";

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openDeleteDialog: false,
			deletingId: ""
		};
		this.goToPalette = this.goToPalette.bind(this);
	}

	openDialog = (id) => {
		this.setState({ openDeleteDialog: true, deletingId: id });
	};

	closeDialog = () => {
		this.setState({ openDeleteDialog: false });
	};

	goToPalette(id) {
		this.props.history.push(`color-palettes/palette/${id}`);
	}

	deletePaletteById = () => {
		this.closeDialog()
		this.props.deletePalette(this.state.deletingId)
		this.setState({deletingId: ""})
	}

	render() {
		const { palettes, classes } = this.props;
		const { openDeleteDialog } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>React Colors</h1>
						<Link to="/color-palettes/palette/new">Create New Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							<CSSTransition key={palette.id} classNames="fade" timeout={500}>
								<MiniPalette
									openDialog={this.openDialog}
									{...palette}
									key={palette.id}
									id={palette.id}
									goToPalette={() => this.goToPalette(palette.id)}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog open={openDeleteDialog} onClose={this.closeDialog}>
					<DialogTitle id="delete-dialog-title">
						Delete This Palette ?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.deletePaletteById}>
							<ListItemAvatar>
								<Avatar
									style={{ backgroundColor: blue[100], color: blue[600] }}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
