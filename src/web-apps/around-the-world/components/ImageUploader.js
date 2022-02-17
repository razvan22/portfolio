import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Input from "@mui/material/Input";

import {
	ImageBox,
	Root,
	styles,
} from "../styles/imageUploaderStyles";
import ImgItem from "./ImgItem";


const StyledInput = styled(Input)({
	height: 0,
	width: 0
});

function ImageUploader(props) {
	const {setImages} = props;
	const classes = styles();
	const [imgFiles, setImgFile] = useState([]);

	const handelFileChange = (event) => {
		imgFileToUrl( event.target.files[0]);
	};

	const removeImage = (name) => {
		setImgFile((currentArray) => [...currentArray.filter(file => file.file.name !== name)]);
	}


	function imgFileToUrl(file) {
		const reader = new FileReader();
		reader.onloadend = () => {
			let url = reader.result;
			let imgObj = { file: file, url: url };
		  setImgFile((currentArray) => [...currentArray.filter(img => img.file.name !== file.name), imgObj]);
		};
		reader.readAsDataURL(file);
	}
	useEffect(() => {
		if (imgFiles.length === 0) {
			document.getElementById("icon-button-file").value = "";
		}
		setImages(imgFiles.map((img) => img.file));
	}, [imgFiles, setImages]);

	return (
		<Root>
			<Box sx={{ color: "grey.500", my: 1 }}>
				<Typography alignContent variant="h5" m={0} gutterBottom component="h6">
					Upload Image
				</Typography>
			</Box>
			<ImageBox>
				{imgFiles.length > 0
					? imgFiles.map((img) => (
							<ImgItem
								key={img.file.name}
								name={img.file.name}
								removeImg={removeImage}
								imgSrc={img.url}
							/>
					  ))
					: ""}
				<label htmlFor="icon-button-file" className={classes.uploadLabel}>
					<StyledInput
						required
						accept="image/*"
						id="icon-button-file"
						type="file"
						onChange={(event) => handelFileChange(event)}
					/>
					<AddPhotoAlternateIcon fontSize="large" />
					<Typography variant="caption">Select Image</Typography>
				</label>
			</ImageBox>
		</Root>
	);
}

export default ImageUploader;
