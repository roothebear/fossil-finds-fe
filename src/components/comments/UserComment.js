import styles from "./Comment.module.css";

export default function UserComment({ comment }) {

  return (
    <li className={styles.comment_li}>
      <div className={styles.comment_info_container}>
        <em className={styles.comment_body}>{comment.body}</em>
        <footer className={styles.comment_footer}>
          <p className={styles.comment_author}>Author: {comment.author}</p>
          <p className={styles.comment_posted}>
            Posted: {comment.created_at.slice(0, 10)}
          </p>
          <button className={styles.comment_notification}>
            {comment.likes}
          </button>
        </footer>
      </div>
    </li>
  );
}
