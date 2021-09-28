import { useState } from "react";

const BooleanToggler = (initialValue = false) => {
	const [state, setState] = useState(initialValue);

	const toggle = () => {
		setState(!state);
	};

	return [state, toggle];
};

export default BooleanToggler;
