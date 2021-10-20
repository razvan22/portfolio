import axios from "axios";

const FetchUser = async (token) => {
  let user = null;

	if (token != null) {
	  await axios
			.get("http://localhost:8080/api/v1/user/", {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					user = res.data;
				}
			})
			.catch((err) => err);
	}
	if (token === null) {
	}
  return user;
  
};

export default FetchUser;
