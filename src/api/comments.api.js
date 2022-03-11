import axios from "axios";

// COMMENTS - GET ALL, GET BY ARTICLE ID, POST BY ARTICLE ID

// DOESNT EXIST IN API!!
export const fetchComments = () => {
  return axios
    .get("https://fossil-finds.herokuapp.com/api/comments")
    .then((res) => {
      // console.log("fetched comments: ", res.data);
      return res.data;
    });
};

export const fetchCommentsByFindId = (find_id) => {
  return axios
    .get(`https://fossil-finds.herokuapp.com/api/finds/${find_id}/comments`)
    .then((res) => {
      // console.log("fetched comments: ", res.data);
      return res.data;
    });
};

export const postCommentByFindId = (find_id, comment) => {
  return axios
    .post(`https://fossil-finds.herokuapp.com/api/finds/${find_id}/comments`, comment)
    .then((res) => {
      // console.log("fetched comments: ", res.data);
      return res.data;
    });
};

export const patchCommentByCommentId = (comment_id, like_inc) => {
  return axios
    .patch(
      `https://fossil-finds.herokuapp.com/api/comments/${comment_id}`,
      { inc_likes: like_inc }
    )
    .then((res) => {
      // // console.log("user posted: ", res.data);
      return res.data;
    });
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://fossil-finds.herokuapp.com/api/comments/${comment_id}`
  );
};
