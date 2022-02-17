import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";

import { generatePalette } from "./resources/colorHelpers";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NewPaletteForm from "./components/NewPaletteForm";

import Page from "./components/hooks/Page";
import React, { useState, useEffect } from "react";

function ColorPalettes() {
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

	function deletePalette(id) {
		setPalettes(palettes.filter((palette) => palette.id !== id));
	}

	function syncLocalStorage() {
		window.localStorage.setItem("palettes", JSON.stringify(palettes));
	}

	useEffect(() => {
		syncLocalStorage();
	}, [palettes]);

	return (
		<Route
			render={({ location }) => (
				<TransitionGroup>
					<CSSTransition key={location.key} classNames="page" timeout={500}>
						<Switch location={location}>
							<Route
								exact
								path="/color-palettes/palette/new"
								render={(routeProps) => (
									<Page>
										<NewPaletteForm
											savePalette={savePalette}
											palettes={palettes}
											{...routeProps}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path="/color-palettes"
								render={(routerProps) => (
									<Page>
										<PaletteList
											deletePalette={deletePalette}
											palettes={palettes}
											{...routerProps}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path="/color-palettes/palette/:id"
								render={(routerProps) => (
									<div className="page">
										<Palette
											palette={generatePalette(
												findPalette(routerProps.match.params.id)
											)}
										/>
									</div>
								)}
							/>
							<Route
								exact
								path="/color-palettes/palette/:paletteId/:colorId"
								render={(routerProps) => (
									<Page>
										<SingleColorPalette
											colorId={routerProps.match.params.colorId}
											palette={generatePalette(
												findPalette(routerProps.match.params.paletteId)
											)}
										/>
									</Page>
								)}
							/>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}
		/>
	);
}

export default ColorPalettes;
