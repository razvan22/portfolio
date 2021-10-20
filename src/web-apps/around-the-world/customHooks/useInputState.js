import { useState } from "react";

export default (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const handelChange = (e) => setValue(e.target.value);
	const reset = () => setValue("");
	return [value, handelChange, reset];
};

