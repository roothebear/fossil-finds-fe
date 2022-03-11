import { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import { fetchCommentsByFindId, patchCommentByCommentId } from "../../api/comments.api";

export default function Comment({ comment, setCommentsByFindId, find_slug }) {

  const [liked, setLiked] = useState(false);

  const addLike = () => {
    if(!liked) {
      return patchCommentByCommentId(comment.comment_id, 1).then(()=>{
        console.log("comment: ", comment)
        return fetchCommentsByFindId(find_slug).then(({comments})=>{
          setLiked(true)
          setCommentsByFindId(comments)
        })
      })
    } else {
    alert("you have already liked this comment!")
    }
  }

  return (
    <li className={styles.comment_li}>
      <div className={styles.comment_info_container}>
        <em className={styles.comment_body}>{comment.body}</em>
        <footer className={styles.comment_footer}>
          <p className={styles.comment_author}>Author: {comment.author}</p>
          <p className={styles.comment_posted}>
            Posted: {comment.created_at.slice(0, 10)}
          </p>
          <button className={styles.comment_notification} onClick={addLike}>
            {comment.likes}
          </button>
        </footer>
      </div>
    </li>
  );
}
