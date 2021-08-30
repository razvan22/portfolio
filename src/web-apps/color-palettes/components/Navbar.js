import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import '../style/Navbar.css';


export default class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    const {level, changeLevel} = this.props;
		return (
			<nav className="Navbar">
				<div className="logo">
					<a href="#">react-color-picker</a>
					<div className="slider">
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
			</nav>
		);
	}
}
