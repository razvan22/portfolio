import React, { useState } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { StyledFormControl } from "../styles/locationSelectorStyles";
import useInputState from "../customHooks/useInputState";

function LocationSelector(props) {
	const { setSelectedLocation, continentsList } = props;
	const [countries, setCountries] = useState([]);
	const [address, handelAddressChange, clearAddress] = useInputState("");
	const [location, setLocation] = useState({
		continent: "",
		country: "",
		address: "",
	});
	const handleContinentChange = (event, value) => {
		setCountryListBasedOnContinent(value);
		setLocation({ ...location, continent: value });
		setSelectedLocation({ ...location, continent: value });
	};

	const handelCountryChange = (event, value) => {
		setLocation({ ...location, country: value });
		setSelectedLocation({ ...location, country: value });

	};

	const handelLocationChange = (e) => {	
		handelAddressChange(e);
		setLocation({ ...location, address: e.target.value });

		setSelectedLocation({ ...location, address: e.target.value });
	}

	const setCountryListBasedOnContinent = (continentName) => {
		let selectedContinent = continentsList
			.filter((continent) => continent.name === continentName)
			.shift();
		// countries https://countries.trevorblades.com
		fetch("https://countries.trevorblades.com/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
            query {
                continent(code: "${selectedContinent.code}"){
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
				const countries = [...data.data.continent.countries];
				countries.forEach((country) => (country.label = country.name));
				setCountries(countries);
			});
	};

	return (
		<Box>
			<StyledFormControl variant="standard" margin="normal">
				{/* select continent */}
				<Autocomplete
					sx={{ width: { md: "33%" } }}
					id="combo-box-demo"
					options={continentsList}
					autoHighlight
					getOptionLabel={(option) => option.name}
					onInputChange={handleContinentChange}
					renderOption={(props, option) => (
						<Box
							component="li"
							sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
							{...props}
						>
							{option.label}
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							{...params}
							required
							label="Choose a continent"
							inputProps={{
								...params.inputProps,
							}}
						/>
					)}
				/>
				{/* select country */}
				<Autocomplete
					sx={{ width: { md: "33%" }, marginTop: { xs: 2, md: 0 } }}
					id="country-select-demo"
					options={countries}
					autoHighlight
					getOptionLabel={(option) => option.label}
					onInputChange={handelCountryChange}
					renderOption={(props, option) => (
						<Box
							component="li"
							sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
							{...props}
						>
							<img
								loading="lazy"
								width="20"
								src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
								srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
								alt=""
							/>
							{option.label}
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Choose a country"
							required
							inputProps={{
								...params.inputProps,
								autoComplete: "new-password", // disable autocomplete and autofill
							}}
						/>
					)}
				/>
				<TextField
					sx={{ width: { md: "33%" }, marginTop: { xs: 2, md: 0 } }}
					required
					label="Address"
					variant="outlined"
					onChange={handelLocationChange}
					value={address}
				/>
			</StyledFormControl>
		</Box>
	);
}

export default LocationSelector;
