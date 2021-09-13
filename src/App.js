import { Route, Switch } from "react-router-dom";
import Palette from "./web-apps/color-palettes/components/Palette";
import seedColors from "./web-apps/color-palettes/seedColors";
import { generatePalette } from "./web-apps/color-palettes/resources/colorHelpers";
import PaletteList from "./web-apps/color-palettes/components/PaletteList";
import SingleColorPalette from "./web-apps/color-palettes/components/SingleColorPalette";
import NewPaletteForm from "./web-apps/color-palettes/components/NewPaletteForm";
import React, { useState, useEffect } from "react";

function App() {
	const savedPallets = JSON.parse(window.localStorage.getItem("palettes"));
	const [palettes, setPalettes] = useState(savedPallets || seedColors);
	function findPalette(id) {
		return palettes.find((palette) => {
			return palette.id === id;
		});
	}

	function savePalette(newPalette) {
		setPalettes([...palettes, newPalette]);
		syncLocalStorage();
	}

	function deletePalette(id){
		setPalettes(palettes.filter(palette => palette.id !== id))
	}

	function syncLocalStorage() {
		window.localStorage.setItem("palettes", JSON.stringify(palettes));
	}

	useEffect(() => {
		syncLocalStorage();
	}, [palettes]);

	return (
		<Switch>
			<Route
				exact
				path="/palette/new"
				render={(routeProps) => (
					<NewPaletteForm
						savePalette={savePalette}
						palettes={palettes}
						{...routeProps}
					/>
				)}
			/>
			<Route
				exact
				path="/"
				render={(routerProps) => (
					<PaletteList
						deletePalette={deletePalette}
						palettes={palettes}
						{...routerProps}
					/>
				)}
			/>
			<Route
				exact
				path="/palette/:id"
				render={(routerProps) => (
					<Palette
						palette={generatePalette(findPalette(routerProps.match.params.id))}
					/>
				)}
			/>
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={(routerProps) => (
					<SingleColorPalette
						colorId={routerProps.match.params.colorId}
						palette={generatePalette(
							findPalette(routerProps.match.params.paletteId)
						)}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
