import axios from "axios";

// TYPES - GET

export const fetchTypes = () => {
  return axios
    .get("https://fossil-finds.herokuapp.com/api/types")
    .then((res) => {
      return res.data;
    });
};
