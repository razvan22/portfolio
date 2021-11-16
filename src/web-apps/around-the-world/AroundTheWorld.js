import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";



import Navbar from "./components/Navbar";
import aroundTheWorldStyles from "./styles/aroundTheWorldStyles";
import { UserContext } from "./context/UserContext";

function AroundTheWorld() {
	const classes = aroundTheWorldStyles();
	const { loading} = useContext(UserContext);



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
