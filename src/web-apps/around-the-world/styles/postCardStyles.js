import { makeStyles } from "@material-ui/core/styles";
<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap');
</style>;

const styles = makeStyles((theme) => ({
	img: {
		width: "100%",
		height: "75%",
	},

	cadBox: {
		position: "relative",
		width: "85%",
		[theme.breakpoints.up("md")]: {
			width: "66%",
		},
		[theme.breakpoints.up("lg")]: {
			width: "58%",
		},
		[theme.breakpoints.up("xl")]: {
			width: "41%",
		},
	},

	ratingAvatar: {
		position: "absolute !important",
		top: "1.5rem",
		right: "2rem",
	},

	title: {},
	description: {},
}));

export default styles;
