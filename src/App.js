import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "./pages/HomePage";
import ProjectsMetadataProvider from "./assets/contexts/projectsListContext";

// Color Palettes web-app
import { generatePalette } from "./web-apps/color-palettes/resources/colorHelpers";
import seedColors from "./web-apps/color-palettes/seedColors";
import PaletteList from "./web-apps/color-palettes/components/PaletteList";
import SingleColorPalette from "./web-apps/color-palettes/components/SingleColorPalette";
import Palette from "./web-apps/color-palettes/components/Palette";
import Page from "./web-apps/color-palettes/components/hooks/Page";
import NewPaletteForm from "./web-apps/color-palettes/components/NewPaletteForm";

import "./App.css";

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
		<ProjectsMetadataProvider>
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="page" timeout={500}>
							<Switch location={location}>
								<Route exact path="/" component={HomePage} />
								<Route
									exact
									path="/palette/new"
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
									path="/palette/:id"
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
									path="/palette/:paletteId/:colorId"
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
		</ProjectsMetadataProvider>
	);
}

export default App;
