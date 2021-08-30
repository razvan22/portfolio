import './App.css';
import Palette from "./web-apps/color-palettes/components/Palette";
import seedColors from "./web-apps/color-palettes/seedColors";
import {generatePalette} from "./web-apps/color-palettes/resources/colorHelpers";


function App() {
 	return (
		<div>
			<Palette palette={generatePalette(seedColors[4])} />
		</div>
	);
}

export default App;
