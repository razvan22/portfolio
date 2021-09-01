import { Route, Switch } from "react-router-dom";
import Palette from "./web-apps/color-palettes/components/Palette";
import seedColors from "./web-apps/color-palettes/seedColors";
import { generatePalette } from "./web-apps/color-palettes/resources/colorHelpers";
import PaletteList from "./web-apps/color-palettes/components/PaletteList";
import SingleColorPalette from "./web-apps/color-palettes/components/SingleColorPalette";

function App() {
	function findPalette(id) {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	}

	return (
		<Switch>
			<Route
				exact
				path="/"
				render={(routerProps) => (
					<PaletteList palettes={seedColors} {...routerProps} />
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
						palette={generatePalette(findPalette(routerProps.match.params.paletteId))}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
