import { color, palette } from "@material-ui/system";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.colorShades = this.gatherShaders(
			this.props.palette,
			this.props.colorId
		);
		this.state = { format: "hex" };
    this.changeColorFormat = this.changeColorFormat.bind(this);
	}

	changeColorFormat(value) {
		this.setState({ format: value });
	}

	gatherShaders(palette, colorId) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorId)
			);
		}
		return shades.slice(1);
	}

	render() {
    const {format} = this.state;
    const { paletteName, emoji} = this.props.palette;
		const colorBoxes = this.colorShades.map((color) => (
			<ColorBox
				key={color.hex}
				name={color.name}
				background={color[format]}
				hasLink={false}
			/>
		));
		return (
			<div className="Palette">
				<Navbar hasSlider={false} handleChange={this.changeColorFormat} />
				<div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default SingleColorPalette;
