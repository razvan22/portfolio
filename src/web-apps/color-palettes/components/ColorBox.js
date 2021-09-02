import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import {withStyles} from "@material-ui/styles";

import "../style/ColorBox.css";

const styles = {
	copyText: {
		color: (props) => chroma(props.background).luminance() >= 0.6 ? "dark-text" : "light-text",
	},
};


class ColorBox extends Component {
	constructor(props) {
		super(props);

		this.changeCopyState = this.changeCopyState.bind(this);
		this.state = {
			copied: false,
		};
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}

	render() {
		const { name, background, paletteId, id, classes } = this.props;
		const { copied } = this.state;
		
		const isDarkColor = chroma(background).luminance() <= 0.8;
		const isLightColor = chroma(background).luminance() >= 0.6;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className="ColorBox">
					<div
						style={{ background }}
						className={`copy-overlay ${copied && "show"}`}
					/>
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>copied</h1>
						<p className={classes.copyText}>
							{this.props.background}
						</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span
								className={isDarkColor ? "color-name light-text" : "color-name"}
							>
								{name}
							</span>
						</div>
						<button className={`copy-button ${isLightColor && "dark-text"}`}>
							Copy
						</button>
					</div>
					{this.props.hasLink && (
						<Link
							to={`/palette/${paletteId}/${id}`}
							onClick={(e) => e.stopPropagation()}
						>
							<span className={`see-more ${isLightColor && "dark-text"}`}>
								MORE
							</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default withStyles(styles)(ColorBox);
