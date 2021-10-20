import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function AlertDialog(props) {
	const { open, handleClose, message, type, title } = props;
	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<Alert severity={type}>
						<AlertTitle>{title}</AlertTitle>
						{message}
					</Alert>
				</DialogContent>
				<DialogActions>
					<Button
						variant="outlined"
						onClick={handleClose}
						autoFocus
					>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AlertDialog;
