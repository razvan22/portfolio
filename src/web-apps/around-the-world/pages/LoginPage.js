import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";

import { UserContext } from "../context/UserContext";
import useInput from "../customHooks/useInputState";
import FetchUser from "../customHooks/fetchUser";
import {StyledLink, loginStyles} from "../styles/loginStyles";

function LoginPage({history}) {
	const [emailValue, handleEmailChange, resetEmail] = useInput("");
	const [passwordValue, handlePasswordChange, resetPassword] = useInput("");
	const { jwtToken, setJwtToken, setUser, setLoading } = useContext(UserContext);
	const [openDialog, setOpenDialog] = useState(false);
	const [checkBoxChecked, setChecked] = useState(false);
	const classes = loginStyles();
	
	const handleCheckBoxChange = (event) => {
		setChecked(event.target.checked);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	const login = (e) => {
		e.preventDefault();
		let user = {
			userName: emailValue,
			password: passwordValue,
		};

		axios
			.post(`${process.env.REACT_APP_BACKEND_SERVER_IP}/login`, user, {
				headers: {
					"Allow-Origin": "*",
					"Content-type": "application/json",
				},
			})
			.then((res) => {
				if (res.status === 200) {
					setJwtToken(res.headers.authorization);
					fetchUserInfo();
				}
			})
			.catch((err) => setOpenDialog(true));
	};

	const fetchUserInfo = async () => {
		let user = await FetchUser(jwtToken);
		setUser(user);
		resetEmail();
		resetPassword();
		history.push("/around-the-world");
	};

	useEffect(()=>{setLoading(false)},[])

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Paper component="form" onSubmit={login} className={classes.loginForm}>
					<Avatar sx={{ m: 1, bgcolor: "#f62a00", mt: "8%" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<TextField
						required
						value={emailValue}
						onChange={handleEmailChange}
						id="outlined-required"
						label="Email Address*"
						variant="outlined"
						size="small"
						sx={{ width: "65%", marginTop: "10%" }}
					/>
					<TextField
						required
						value={passwordValue}
						onChange={handlePasswordChange}
						id="outlined-password-required"
						label="Password*"
						type={checkBoxChecked ? "text" : "password"}
						autoComplete="current-password"
						sx={{ width: "65%", marginTop: "5%" }}
						size="small"
					/>
					<Box sx={{ width: "70%", my: 1 }}>
						<Checkbox
							checked={checkBoxChecked}
							onChange={handleCheckBoxChange}
							inputProps={{ "aria-label": "controlled" }}
						/>
						<Typography variant="caption" gutterBottom>
							Show password
						</Typography>
					</Box>
					<Button
						type="submit"
						variant="contained"
						sx={{ width: "65%", marginTop: "5%", bgcolor: "#00293c" }}
					>
						SIGN IN
					</Button>
					<StyledLink
						variant="body2"
						mt={7}
						pb={3}
						onClick={() => history.push("/around-the-world/signup")}
					>
						Don't have an account? Sign Up
					</StyledLink>
				</Paper>
				<Dialog
					open={openDialog}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle
						id="alert-dialog-title"
						align="center"
						color="error.main"
					>
						{"Login failed !"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description" color="text.main">
							Please check your username and password and try again.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button variant="contained" onClick={handleClose} autoFocus>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</div>
	);
}

export default LoginPage;
