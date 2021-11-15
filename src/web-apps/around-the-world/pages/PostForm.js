import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import Navbar from "../components/Navbar";
import {
	StyledStack,
	InfoPanel,
	Root,
	Form,
} from "../styles/postFormStyles";
import useInput from "../customHooks/useInputState";
import useLocalStorage from "../customHooks/jwtReducer";
import LocationSelector from "../components/LocationSelector";
import ImageUploader from "../components/ImageUploader";

function PostForm() {
	const [location, setLocation] = useState();
	const [title, handelTitleChange] = useInput("");
	const [description, handelDescriptionChange] = useInput("");
	const [images, setImages] = useState([]);


	const [continentsList, setContinentsList] = useLocalStorage(
		"continents",
		null
	);

	// const [post, setPost] = useState({
	// 	postDate: "",
	// 	author: { id: 1 },
	// 	location: {
	// 		continent: "",
	// 		country: "",
	// 		address: "",
	// 	},
	// 	title: "",
	// 	content: "",
	// 	images: [],
	// });

	const submitPost = (e) => {
		e.preventDefault();
		const post = {
			title: title,
			description: description,
			location: location,
			images : images,
		}
		console.info('POST :', post)

	}

	const fetchContinentsList = () => {
		fetch("https://countries.trevorblades.com/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
                query {
                    continents{
                        name
                        code
                    }
                }
            `,
			}),
		})
			.then((res) => res.json())
			.then((json) => {
				json.data.continents.forEach(
					(continent) => (continent.label = continent.name)
				);
				setContinentsList(json.data.continents);
			})
			.catch((err) => err);
	};

	useEffect(() => {
		if (continentsList === null) {
			fetchContinentsList();
		}
	}, [continentsList]);
	
	return (
		<Root>
			<Navbar search={false} />
			<StyledStack direction="row">
				<InfoPanel>
					<h3>Share Your Experience With The World 😉</h3>
				</InfoPanel>
				<Form component="form" onSubmit={submitPost}>
					<Typography variant="h5" gutterBottom component="h5">
						Create a post
					</Typography>
					<TextField
						label="Title"
						variant="outlined"
						fullWidth
						required
						margin="normal"
						onChange={handelTitleChange}
						value={title}
					/>
					<TextField
						label="Description"
						variant="outlined"
						fullWidth
						required
						multiline
						rows={8}
						margin="normal"
						value={description}
						onChange={handelDescriptionChange}
					/>
					{continentsList !== null && (
						<LocationSelector
						
							setSelectedLocation={setLocation}
							continentsList={continentsList}
						/>
					)}
					<ImageUploader setImages={setImages} />
					<Button
						type="submit"
						size="large"
						sx={{ marginLeft: "87%", mt: 2 }}
						variant="contained"
					>
						Publish
					</Button>
				</Form>
			</StyledStack>
		</Root>
	);
}

export default PostForm;
