import axios from "axios";

const searchAPI = (some, setState) => {
  console.log("hitting an API");
  return axios(
    `https://www.omdbapi.com/?apikey=1e996539&s=${some}`
  ).then((response) => setState(response));
};
export default searchAPI;
