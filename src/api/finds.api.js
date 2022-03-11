import axios from "axios";

// FINDS (ALL) - GET ALL/BY ID, POST, PATCH LIKES

export const fetchFinds = () => {
  return axios
    .get("https://fossil-finds.herokuapp.com/api/finds")
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const fetchFindById = (find_id) => {
  return axios
    .get(`https://fossil-finds.herokuapp.com/api/finds/${find_id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const postFind = (find) => {
  return axios
    .post(`https://fossil-finds.herokuapp.com/api/finds`, find)
    .then((res) => {
      console.log("find posted: ", res.data);
      return res.data;
    });
};

export const updateFindById = (find_id, find) => {
  return axios
    .patch(`https://fossil-finds.herokuapp.com/api/finds/${find_id}`, find)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};


// USER FINDS - GET BY USER, DELETE


// DOES THIS ENDPOINT EXIST?
export const fetchUserFinds = (username) => {
  if (username) {
    let urlString = `https://fossil-finds.herokuapp.com/api/finds/${username}/basket`;

    return axios.get(urlString).then((res) => {
      // console.log("fetched user finds: ", username)
      console.log(res.data);
      return res.data;
    });
  } else {
    console.log("error: ", "Cannot fetch user finds");
  }
};

// DOES THIS ENDPOINT EXIST?
export const deleteFind = (find_id) => {
  return axios.delete(
    `https://fossil-finds.herokuapp.com/api/finds/${find_id}`
  );
};