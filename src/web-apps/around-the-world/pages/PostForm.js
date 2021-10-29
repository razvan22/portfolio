import React from "react";
import Typography from "@mui/material/Typography";

import Navbar from "../components/Navbar";
import {
	StyledStack,
	InfoPanel,
	Root,
	Form,
	Subtitle,
} from "../styles/postFormStyles";

function PostForm() {
	return (
		<Root>
			<Navbar search={false} />
			<StyledStack direction="row">
				<InfoPanel>
					<h1>Share Your Experience With Others 😉</h1>
				</InfoPanel>
				<Form>
					<Subtitle>Create a post</Subtitle>
				</Form>
			</StyledStack>
		</Root>
	);
}

export default PostForm;
