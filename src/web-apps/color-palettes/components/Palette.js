import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import "../style/Palette.css";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: "hex"
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeColorFormat = this.changeColorFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeColorFormat(value) {
		this.setState({format: value});
	}


	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				key={color.id}
				background={color[format]}
				name={color.name}
				id={color.id}
				paletteId={id}
				hasLink={true}
			/>
		));

		return (
			<div className="Palette">
				<Navbar
					hasSlider={true}
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeColorFormat}
				/>
				<div className="Palette-colors">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji}/>
			</div>
		);
	}
}
export default Palette;
