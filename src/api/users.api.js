import axios from "axios";

// USER - GET , POST

export const fetchUser = (username) => {
  if (username) {
    let urlString = `https://fossil-finds.herokuapp.com/api/users/${username}`;

    return axios.get(urlString).then((res) => {
      return res.data;
    });
  } else {
  }
};

export const postUser = (user) => {
  return axios
    .post("https://fossil-finds.herokuapp.com/api/users", user)
    .then((res) => {});
};

// USERS - GET

export const fetchUsers = () => {
  return axios
    .get("https://fossil-finds.herokuapp.com/api/users")
    .then((res) => {
      return res.data;
    });
};

// USER COMMENTS - GET

export const fetchCommentsByUsername = (username) => {
  return axios
    .get(`https://fossil-finds.herokuapp.com/api/users/${username}/comments`)
    .then((res) => {
      return res.data;
    });
};
