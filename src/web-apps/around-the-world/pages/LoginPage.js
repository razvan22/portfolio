import React, { useContext, useState } from "react";
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


import { UserContext } from "../context/UserContext";
import useInput from "../customHooks/useInputState";
import FetchUser from "../customHooks/fetchUser";
import {StyledLink} from "../styles/loginStyles";

function LoginPage({history}) {
	const [emailValue, handleEmailChange, resetEmail] = useInput("");
	const [passwordValue, handlePasswordChange, resetPassword] = useInput("");
	const { jwtToken, setJwtToken, user, setUser } = useContext(UserContext);
	const [openDialog, setOpenDialog] = useState(false);
	
	
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
			.post("http://localhost:8080/login", user, {
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
			.catch((err) => setOpenDialog(true))
	};

	const fetchUserInfo = async () => {
		let user = await FetchUser(jwtToken);
		setUser(user);
		resetEmail();
		resetPassword();
		// history.push("/web-apps/around-the-world");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100vw",
				height: "100vh",
				backgroundColor: "#313538",
			}}
		>
			<Paper
				component="form"
				onSubmit={login}
				sx={{
					height: "45%",
					width: "20%",
					marginTop: "5%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
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
					type="password"
					autoComplete="current-password"
					sx={{ width: "65%", marginTop: "5%" }}
					size="small"
				/>
				<Button
					type="submit"
					variant="contained"
					sx={{ width: "65%", marginTop: "5%", bgcolor: "#00293c" }}
				>
					SIGN IN
				</Button>
				<StyledLink
					variant="body2"
					mt={8}
					onClick={() => history.push("/around-the-world/signup")}
				>
					{"Don't have an account? Sign Up"}
				</StyledLink>
			</Paper>
			<Dialog
				open={openDialog}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title" align="center" color="error.main">
					{"Some thing went wrong !"}
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
	);
}

export default LoginPage;
