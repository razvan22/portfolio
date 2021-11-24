import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";


import { StyledFormControl, Root } from "../styles/signUpStyles";
import ToggleBooleanState from "../customHooks/ToggleBooleanState";
import AlertDialog from "../components/AlertDialog";
import useInput from "../customHooks/useInputState";
import Navbar from "../components/Navbar";
import {UserContext} from '../context/UserContext';

function SignUpUser() {
	const {setLoading} = useContext(UserContext);
	const [firstName, handleFirstNameChange, resetFirstName] = useInput("");
	const [lastName, handleLastNameChange, resetLastName] = useInput("");
	const [emailValue, handleEmailChange, resetEmail] = useInput("");
	const [passwordValue, handlePasswordChange, resetPassword] = useInput("");
	const [confirmPasswordValue, handleConfirmPasswordChange, resetConfirmPassword] = useInput("");

	const [alertDialogOpen, toggleAlertDialogOpen] = ToggleBooleanState();
	const [passwordMatch, setPasswordMatch] = useState(true);
	const [message, setMessage] = useState();
	const [messageType, setMessageType] = useState();
	const [helperText, setHelperText] = useState('');
	const [checkBoxChecked, setChecked] = useState(false);

	const checkIfPasswordsMatch = () => {
		setPasswordMatch(passwordValue === confirmPasswordValue);
	};

	const handleCheckBoxChange = (event) => {
		setChecked(event.target.checked);
	};

	const clearForm = () => {
		resetFirstName();
		resetLastName();
		resetPassword();
		resetConfirmPassword();
		resetEmail();
	}

	const signUpNewUser = (e) => {
		setHelperText("");
		e.preventDefault();
		checkIfPasswordsMatch();

		const user = {
			firstName: firstName,
			lastName: lastName,
			email: emailValue,
			password: confirmPasswordValue,
			roles: "USER",
			isActive: true,
		};

		if (passwordValue !== confirmPasswordValue) {
			setHelperText("Passwords didn’t match.");
		}
		if (passwordValue === confirmPasswordValue) {
			axios
				.post("http://localhost:8080/api/v1/user/new", user, {
					headers: {
						"Allow-Origin": "*",
						"Content-type": "application/json",
					},
				})
				.then((res) => {
					clearForm();
					setMessageType("success");
					setMessage(res.data.message);
					toggleAlertDialogOpen();
				})
				.catch((err) => {
					setMessageType("error");
					setMessage(err.response.data.message);
					toggleAlertDialogOpen();
				});
		}
	};

	useEffect(()=>{ setLoading(false)},[])

	return (
		<Root>
			<Navbar search={false} />
			<AlertDialog
				open={alertDialogOpen}
				handleClose={toggleAlertDialogOpen}
				message={message}
				type={messageType}
			/>
			<StyledFormControl
				component="form"
				onSubmit={signUpNewUser}
			>
				<Typography
					p={{ xs: 1 }}
					variant="h5"
					gutterBottom
					component="h5"
					sx={{ my: { sm: 1 } }}
				>
					Create your account
				</Typography>
				<Grid container spacing={2} p={{ xs: 1 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							required
							id="outlined-required"
							label="First Name"
							size="small"
							onChange={handleFirstNameChange}
							value={firstName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							required
							id="outlined-required"
							label="Last Name"
							size="small"
							onChange={handleLastNameChange}
							value={lastName}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="outlined-required"
							label="Email"
							fullWidth
							size="small"
							onChange={handleEmailChange}
							value={emailValue}
							sx={{
								my: {
									sm: 1,
								},
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="outlined-required"
							label="Password"
							type={checkBoxChecked ? "text" : "password"}
							fullWidth
							size="small"
							onChange={handlePasswordChange}
							value={passwordValue}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							error={!passwordMatch}
							required
							id="outlined-required"
							label="Confirm"
							type={checkBoxChecked ? "text" : "password"}
							fullWidth
							size="small"
							onChange={handleConfirmPasswordChange}
							value={confirmPasswordValue}
							helperText={helperText}
						/>
					</Grid>
				</Grid>
				<Grid container direction="row" justifyContent="end" p={{ xs: 1 }}>
					<Grid item item xs={12}>
						<Checkbox
							checked={checkBoxChecked}
							onChange={handleCheckBoxChange}
							inputProps={{ "aria-label": "controlled" }}
						/>
						<Typography variant="caption" gutterBottom>
							Show password
						</Typography>
					</Grid>
					<Grid item item xs={12} sm={6} md={5}>
						<Button
							type="submit"
							sx={{
								my: {
									xs: 2,
									sm: 4,
								},
								width: "100%",
								bgcolor: "#00293c",
							}}
							variant="contained"
						>
							Sign Up
						</Button>
					</Grid>
				</Grid>
			</StyledFormControl>
		</Root>
	);
}

export default SignUpUser;
