import './App.css';
import Palette from "./web-apps/color-palettes/components/Palette";
import seedColors from "./web-apps/color-palettes/seedColors";

function App() {
	return (
		<div>
			<Palette {...seedColors[4]} />
		</div>
	);
}

export default App;
