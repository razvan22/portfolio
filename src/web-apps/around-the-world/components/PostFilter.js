import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import useLocalStorage from "../customHooks/jwtReducer";
import useInput from "../customHooks/useInputState";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
		paddingTop:"3px"
  },
  formBox: {
    width:"40%",
  }
}));

function PostFilter(props) {
	const classes = styles();
	const { fetchPostsByContinent, filterByCountry, getAllWereTitleStartsWith } =	props;
	const [title, setTitle, clearTitle] = useInput('');
	const [continent, setContinent] = useState(null);
	const [country, setCountry] = useState("");
	const [open, setOpen] = useState(false);
	const [countries, setCountries] = useState([]);
	const [continentsList, setContinentsList] = useLocalStorage(
		"continents",
		null
	);


	const fetchContinentsList = () => {
		fetch("https://countries.trevorblades.com/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
							query {
									continents{
											name
											code
									}
							}
					`,
			}),
		})
			.then((res) => res.json())
			.then((json) => {
				setContinentsList(json.data.continents);
			})
			.catch((err) => err);
	};
	
	const setCountryListBasedOnContinent = (continentName) => {
	
		fetch("https://countries.trevorblades.com/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
					query {
							continent(code: "${continent.code}"){
									countries{
									name,
									code
									}
							}
					}
					`,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setCountries(data.data.continent.countries);
			});
	};

	const handleContinentChange = (event) => {
		setContinent(event.target.value);
		fetchPostsByContinent(event.target.value.name)
	};

	const handelCountryChange = (event) => {
		setCountry(event.target.value)
		filterByCountry(event.target.value)
	}

	const handelTitleChange = (event) => {
		setTitle(event);
		getAllWereTitleStartsWith(event.target.value)
	}

	useEffect(() => {
		if (continentsList === null) {
			fetchContinentsList();
		}
		if(continent !== null) { 
			setCountryListBasedOnContinent();
		}
	}, [continentsList, continent]);

	if (continentsList !== null) return (
			<Box className={classes.root}>
				<FormControl sx={{ m: 1 }} className={classes.formBox}>
					<InputLabel id="demo-simple-select-helper-label">
						Continent
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={continent}
						label="Continent"
						onChange={handleContinentChange}
					>
						{continentsList.map((continent) => (
							<MenuItem key={continent.code} value={continent}>
								{continent.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl
					disabled={!countries.length > 0}
					sx={{ m: 1 }}
					className={classes.formBox}
				>
					<InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={country}
						label="Country"
						onChange={handelCountryChange}
					>
						{countries.map((country) => (
							<MenuItem value={country.name}>{country.name}</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl sx={{ m: 1 }} className={classes.formBox}>
					<OutlinedInput
						id="filled-adornment-amount"
						value={title}
						onChange={handelTitleChange}
						placeholder="Search..."
						startAdornment={
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						}
					/>
				</FormControl>
			</Box>
		);
		return null;
}

export default PostFilter;
