import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";

const theme = createTheme({
	palette: {
		primary: {
			main: "#00293c",
		},
	},
});

function AroundTheWorld() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Navbar />
				<h1>Around The World !!</h1>
			</div>
		</ThemeProvider>
	);
}

export default AroundTheWorld