import axios from "axios";

// USER - GET , POST

export const fetchUser = (username) => {
  if (username) {
    let urlString = `https://fossil-finds.herokuapp.com/api/users/${username}`;

    return axios.get(urlString).then((res) => {
      // console.log("user fetched: ", res.data);
      return res.data;
    });
  } else {
    console.log("error: ", "Cannot fetch user");
  }
};

export const postUser = (user) => {
  return axios
    .post("https://fossil-finds.herokuapp.com/api/users", user)
    .then((res) => {
      // // console.log("user posted: ", res.data);
      // return res.data;
    });
};

// USERS - GET

export const fetchUsers = () => {
  return axios
    .get("https://fossil-finds.herokuapp.com/api/users")
    .then((res) => {
      // console.log("fetched users: ", res.data);
      return res.data;
    });
};


// USER COMMENTS - GET

export const fetchCommentsByUsername = (username) => {
  return axios
    .get(`https://fossil-finds.herokuapp.com/api/users/${username}/comments`)
    .then((res) => {
      // console.log("fetched users: ", res.data);
      return res.data;
    });
};