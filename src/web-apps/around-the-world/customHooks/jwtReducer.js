import { useState, useEffect } from "react";

function useLocalStorage(key, value) {
	// make a pice of state based off a value in local storage
	// useState can take a function as an argument not just a default value
	const [state, setState] = useState(readLocalStorage(key, value));
	// use useEffect to update local storage when state changes
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state, key]);

	return [state, setState];
}

const readLocalStorage = (key, value) => {
	let val;
	try {
    // read from local storage if nothing set value to null
    val = JSON.parse(window.localStorage.getItem(key) || null);
	} catch (e) {
    // if nothing in local storage set value to null
    val = value.trim();
  }
  return val;
};




export default useLocalStorage;