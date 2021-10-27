import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";



import Navbar from "./components/Navbar";
import aroundTheWorldStyles from "./styles/aroundTheWorldStyles";
import { UserContext } from "./context/UserContext";
import FetchUser from "./customHooks/fetchUser";

function AroundTheWorld() {
	const classes = aroundTheWorldStyles();
	const { jwtToken, setUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	useEffect(async () => {
		let user = await FetchUser(jwtToken);
		setUser(user);
	}, []);

	return (
	
		<div className={classes.cover}>
			<Navbar search={true}/>
			{loading ? (
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={loading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			) : (
				<Box
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "end",
						flexDirection: "column",
					}}
				>
					<Box
						sx={{
							marginTop: "8%",
							width: "35%",
							height: "30%",
							display: "flex",
							alignItems: "center",
						}}
					></Box>
				</Box>
			)}
		</div>
	);
}

export default AroundTheWorld;
