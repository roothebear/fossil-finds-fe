import styles from "./Pages.module.css";
import { React, useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchFindById } from "../api/finds.api";
import {
  fetchCommentsByFindId,
  postCommentByFindId,
} from "../api/comments.api";

import ImageOverlay from "../components/notifications/ImageOverlay";
import Comment from "../components/comments/Comment";
import { LoggedInContext } from "../contexts/LoggedIn";

export default function Find({ user }) {
  const [overlayActive, setOverlayActive] = useState(false);
  const [find, setFind] = useState({});
  const [commentsByFindId, setCommentsByFindId] = useState([]);
  const { find_slug } = useParams();

  // fetch find and related comments
  useEffect(() => {
    fetchFindById(find_slug).then(({ find }) => {
      find.created_at = find.created_at.slice(0, 10);
      setFind(find);
    });
  }, [find_slug, commentsByFindId]);

  useEffect(() => {
    fetchCommentsByFindId(find_slug).then(({ comments }) => {
      setCommentsByFindId(comments);
    });
  }, [find_slug]);

  const commentsList = commentsByFindId.map((comment) => {
    return (
      <Comment
        comment={comment}
        key={comment.comment_id}
        setCommentsByFindId={setCommentsByFindId}
        find_slug={find_slug}
      />
    );
  });

  // post comment form
  const [commentFormInputs, setCommentFormInputs] = useState({});
  const { loggedIn } = useContext(LoggedInContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCommentFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCommentFormSubmit = (event) => {
    event.preventDefault();
    if (loggedIn) {
      console.log("Comment object submitted: ", commentFormInputs);
      postCommentByFindId(find.find_id, {
        body: commentFormInputs.comment,
        username: user.username,
      }).then(() => {
        fetchCommentsByFindId(find_slug).then(({ comments }) => {
          setCommentsByFindId(comments);
        });
      });
      setCommentFormInputs({});
    } else {
      alert("You need to be logged in to post a comment!");
    }
  };

  // set photo overlay
  const handleClick = () => {
    setOverlayActive(true);
  };

  return (
    <main>
      <header className={styles.find_header}>
        <h1 className="Find_header">{find.title}</h1>
        <Link to="/finds">
          <button className="button_secondary">Back to finds</button>
        </Link>
      </header>
      <div className={styles.find_img_container}>
        <img
          src={find.img_url}
          className={styles.find_img}
          onClick={handleClick}
        ></img>
        <img
          src={find.img_url}
          className={styles.find_img}
          onClick={handleClick}
        />
      </div>
      <section className={styles.find_section}>
        <p className={styles.find_text}>
          <em>Description: </em>
          {find.body}
        </p>
        <p className={styles.find_text}>
          <em>Type: </em>
          {find.type}
        </p>
        <p className={styles.find_text}>
          <em>Date Posted: </em>
          {find.created_at}
        </p>
        <p className={styles.find_text}>
          <em>Found by: </em>
          {find.author}
        </p>
        <p className={styles.find_text}>
          <em>Location Id: </em>
          {find.location_id}
        </p>
      </section>
      <section>
        <h1>Comments</h1>
        <ul className={styles.comments_ul}>
          {commentsList}
          <li className={styles.post_comment_li}>
            <form
              className={styles.post_comment_form}
              onSubmit={handleCommentFormSubmit}
            >
              <label>
                <em>Add a comment above:</em>
              </label>
              <textarea
                type="text"
                name="comment"
                value={commentFormInputs.comment || ""}
                onChange={handleChange}
              />
              <button type="submit" className="button_main">
                Post comment
              </button>
            </form>
          </li>
        </ul>
      </section>
      <ImageOverlay
        img_url={find.img_url}
        title={find.title}
        overlayActive={overlayActive}
        setOverlayActive={setOverlayActive}
      />
    </main>
  );
}
