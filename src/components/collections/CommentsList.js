import UserComment from "../comments/UserComment";
import styles from "./FindsList.module.css";

export default function CommentsList({ comments }) {

    const commentsList = comments.map((comment) => {
      return (
        <UserComment
          comment={comment}
          key={comment.comment_id}
        />
      );
    });


  return <ul className={styles.FindsList_section}>{commentsList}</ul>;
}
