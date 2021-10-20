import { createContext, useState } from "react";
import useLocalStorage from "../customHooks/jwtReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [jwtToken, setJwtToken] = useLocalStorage("Authorization", null);
	const [user, setUser] = useState(null)
  
	return (
		<UserContext.Provider value={{ jwtToken, setJwtToken, user, setUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;