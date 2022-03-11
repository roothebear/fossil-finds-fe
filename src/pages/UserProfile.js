import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedIn";
import styles from "./Pages.module.css";

import FindsIcons from "../components/collections/FindsIcons";
import CommentsList from "../components/collections/CommentsList"
import { fetchCommentsByUsername } from "../api/users.api";

export default function UserProfile({ user, avatarUrl, finds}) {
  const { loggedIn } = useContext(LoggedInContext);
  const [commentsByUser, setCommentsByUser] = useState([])


fetchCommentsByUsername(user.username).then(({comments})=>{
  setCommentsByUser(comments.comments)
})


  if (loggedIn) {
    const filteredFinds = finds.filter((find) => {
      return (find.author === user.username);
    });



    return (
      <main>
        <section className={styles.user_profile_profile_section}>
          <h1 href="#profile">Profile</h1>
          <div className={styles.user_profile_container}>
            <img
              className={styles.user_profile_avatar}
              src={avatarUrl}
              alt="Your avatar"
            />
            <h2>{user.username}</h2>
            <em>{user.bio}</em>
            <br />
            <p>Welcome to Fossil Finds {user.username}!</p>
            <Link to="/finds">
              <button className="button_main">Finds</button>
            </Link>
            <Link to="/add-find">
              <button className="button_main">Add Find</button>
            </Link>
          </div>
        </section>
        <section id="my-finds" className={styles.user_profile_my_finds_section}>
          <h1>My Finds</h1>
          <FindsIcons finds={filteredFinds} />
        </section>
        <section
          id="my-comments"
          className={styles.user_profile_my_comments_section}
        >
          <h1>My Comments</h1>
          <CommentsList comments={commentsByUser}/>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <h1>
          Sorry, you need to login to access your user profile! Please sign in using the user
          menu or
          <Link to="/sign-up"> create an account</Link>.
        </h1>
      </main>
    );
  }
}
