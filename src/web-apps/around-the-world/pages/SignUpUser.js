import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

import { StyledFormControl, Root, signUpStyles } from "../styles/signUpStyles";
import ToggleBooleanState from "../customHooks/ToggleBooleanState";
import AlertDialog from "../components/AlertDialog";
import useInput from "../customHooks/useInputState";

function SignUpUser() {
	const [firstName, handleFirstNameChange, resetFirstName] = useInput("");
	const [lastName, handleLastNameChange, resetLastName] = useInput("");
	const [emailValue, handleEmailChange, resetEmail] = useInput("");
	const [passwordValue, handlePasswordChange, resetPassword] = useInput("");
	const [confirmPasswordValue, handleConfirmPasswordChange,resetConfirmPassword] = useInput("");

	const [open, toggleOpen] = ToggleBooleanState();
	const [passwordMatch, setPasswordMatch] = useState(true);
	const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

	const checkIfPasswordsMatch = () => {
		setPasswordMatch(passwordValue === confirmPasswordValue);
	};

	const signUpNewUser = (e) => {
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

    if(passwordMatch){
      console.log(user);
			axios
				.post("http://localhost:8080/api/v1/user/new", user, {
					headers: {
						"Allow-Origin": "*",
						"Content-type": "application/json",
					},
				})
				.then((res) => {
					setMessageType("success");
          setMessage(res.data.message)
					toggleOpen();
				})
				.catch((err) => {
					setMessageType("error");
					setMessage(err.response.data.message);
					toggleOpen();
				});
		}

	
	};

	return (
		<Root>
			<AlertDialog
				open={open}
				handleClose={toggleOpen}
				message={message}
				type={messageType}
			/>
			<StyledFormControl component="form" onSubmit={signUpNewUser}>
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
							// type="password"
							type="text"
							fullWidth
							size="small"
							onChange={handlePasswordChange}
							value={passwordValue}
							error={!passwordMatch}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							error={!passwordMatch}
							required
							id="outlined-required"
							label="Confirm"
							// type="password"
							type="text"
							fullWidth
							size="small"
							onChange={handleConfirmPasswordChange}
							value={confirmPasswordValue}
						/>
					</Grid>
				</Grid>
				<Grid container direction="row" justifyContent="end" p={{ xs: 1 }}>
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
						<button onClick={signUpNewUser}>Add</button>
					</Grid>
				</Grid>
			</StyledFormControl>
		</Root>
	);
}

export default SignUpUser;
