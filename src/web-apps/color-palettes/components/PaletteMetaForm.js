import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function PaletteMetaForm(props) {
	const [open, setOpen] = useState(true);
	const [stage, setStage] = useState("form");
	const [newPaletteName, setNewPaletteName] = useState("");
	const { savePalette } = props;
	useEffect(() => {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
			props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}, []);

	function handleChange(evt) {
		setNewPaletteName(evt.target.value);
	}

	const saveNewPalette = (emoji) => {
		const palette = {
			paletteName: newPaletteName,
			emoji: emoji.native,
		};

		savePalette(palette);
		setStage("")
	};

	return (
		<>
			<Dialog open={stage === "emoji"} onClose={props.hidePaletteForm}>
				<DialogTitle id="form-dialog-title">
					Choose a Palette Emoji{" "}
				</DialogTitle>

				<Picker onSelect={saveNewPalette} title="Choose a Palette Emoji" />
			</Dialog>

			<Dialog
				open={stage === "form"}
				onClose={props.hidePaletteForm}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Choose a Palette Name </DialogTitle>
				<ValidatorForm onSubmit={() => setStage("emoji")}>
					<DialogContent>
						<DialogContentText>
							Enter a name for your new beautiful palette. Make sure it's
							unique!
						</DialogContentText>

						<TextValidator
							lable="Palette Name"
							fullWidth
							margin="normal"
							onChange={handleChange}
							name="newPaletteName"
							value={newPaletteName}
							validators={["required", "isPaletteNameUnique"]}
							errorMessages={[
								"Enter a palette name !",
								"Palette Name already taken !",
							]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={props.hidePaletteForm} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="secondary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</>
	);
}
export default PaletteMetaForm;
