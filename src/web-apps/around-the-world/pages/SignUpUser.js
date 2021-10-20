import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import axios from 'axios';

import { StyledFormControl, Root, signUpStyles } from "../styles/signUpStyles";

function SignUpUser() {
	const classes = signUpStyles();
  const signUpNewUser = (e) => {
    e.preventDefault();

  }

	return (
		<Root>
			<StyledFormControl component="form">
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
							fullWidth="100"
							size="small"
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
							type="password"
							fullWidth="100"
							size="small"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="outlined-required"
							label="Confirm"
							type="password"
							fullWidth="100"
							size="small"
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
					</Grid>
				</Grid>
			</StyledFormControl>
		</Root>
	);
}

export default SignUpUser;
