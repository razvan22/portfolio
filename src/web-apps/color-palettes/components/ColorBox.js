import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import "../style/ColorBox.css";

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
		const { name, background, paletteId, id } = this.props;
		const { copied } = this.state;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className="ColorBox">
					<div
						style={{ background }}
						className={`copy-overlay ${copied && "show"}`}
					/>
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>copied</h1>
						<p>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className="color-name">{name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					{this.props.hasLink && (
						<Link
							to={`/palette/${paletteId}/${id}`}
							onClick={(e) => e.stopPropagation()}
						>
							<span className="see-more">More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default ColorBox;
