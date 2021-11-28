import { createContext, useState } from "react";
import useLocalStorage from "../customHooks/jwtReducer";
import ToggleBooleanState from "../customHooks/ToggleBooleanState";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [jwtToken, setJwtToken] = useLocalStorage("Authorization", null);
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false);
	
  
	return (
		<UserContext.Provider
			value={{ jwtToken, setJwtToken, user, setUser, loading, setLoading }}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;