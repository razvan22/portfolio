import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

import {
	StyledStack,
	InfoPanel,
	Root,
	Form,
	Subtitle,
} from "../styles/postFormStyles";
import useInput from "../customHooks/useInputState";
import useLocalStorage from "../customHooks/jwtReducer";
import LocationSelector from "../components/LocationSelector";
import ImageUploader from "../components/ImageUploader";
import { UserContext } from "../context/UserContext";

function PostForm({ history }) {
	const [location, setLocation] = useState();
	const [title, handelTitleChange] = useInput("");
	const [description, handelDescriptionChange] = useInput("");
	const [images, setImages] = useState([]);
	const { jwtToken, loading, setLoading } = useContext(UserContext);

	const [continentsList, setContinentsList] = useLocalStorage(
		"continents",
		null
	);

	const submitPost = (e) => {
		e.preventDefault();
		const form_data = new FormData();
		setLoading(true);

		const post = {
			title: title,
			description: description,
			location: location,
		};

		images.forEach((img) => form_data.append("imageFile", img));
		form_data.append('post', JSON.stringify(post))

		axios
			.post(
				`${process.env.REACT_APP_BACKEND_SERVER_IP}/api/v1/post/new`,
				form_data,
				{
					headers: {
						"Allow-Origin": "*",
						"content-type": "multipart/form-data",
						Authorization: jwtToken,
					},
				}
			)
			.then((res) => {
				if (res.status === 201) {
					setTimeout(() => {
						setLoading(false);
						history.push("/around-the-world");
					}, 2000);
				}
			})
			.catch((err) => {
				setTimeout(() => {
					setLoading(false);
				}, 2000);
			});
	};


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
		setLoading(false);

	}, [continentsList]);

	return (
		<Root>
			<StyledStack direction="row">
				<InfoPanel>
					<Subtitle>Share Your Experience With The World 😉</Subtitle>
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
					<Button type="submit" size="large" sx={{ mt: 2 }} variant="contained">
						Publish
					</Button>
				</Form>
			</StyledStack>
			{loading ? (
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={loading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			) : (
				""
			)}
		</Root>
	);
}

export default PostForm;
