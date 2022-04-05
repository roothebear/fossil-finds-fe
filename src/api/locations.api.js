import axios from "axios";

// TYPES - GET

export const fetchLocations = () => {
  return axios
    .get("https://fossil-finds.herokuapp.com/api/locations")
    .then((res) => {
      return res.data;
    });
};
