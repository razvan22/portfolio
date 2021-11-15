import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { ImageItem, styles } from "../styles/imageUploaderStyles";

function ImgItem(props) {
	const classes = styles();
	const { imgSrc, removeImg, name } = props;

	return (
		<div>
			<ImageItem>
				<DeleteForeverIcon
					onClick={() => removeImg(name)}
					className={classes.removeImgIcon}
				/>
				<img className={classes.image} src={imgSrc} alt="" />
			</ImageItem>
		</div>
	);
}

export default ImgItem;
