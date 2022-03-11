import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { LoggedInContext } from "../../contexts/LoggedIn";
import LoginForm from "../inputs/LoginForm";

import styles from "./UserMenu.module.css";
import Avatar from "../notifications/Avatar";

export default function UserMenu({
  menuActive,
  avatarUrl,
  loginUser,
  logoutUser
}) {
  const { loggedIn } = useContext(LoggedInContext);

  const handleClick = () => {
    logoutUser();
  };

  if (menuActive) {
    if (loggedIn) {
      return (
        <nav className={styles.user_menu_nav} aria-label="User Menu Navigation">
          <p>Welcome back!</p>
          <img
            className={styles.user_menu_avatar}
            src={avatarUrl}
            alt="Your avatar"
          />
          <ul className={styles.nav_list}>
            <li className={styles.nav_list_li}>
              <Link to="/user-profile">
                <p>My Profile</p>
              </Link>
            </li>
            <li className={styles.nav_list_li}>
              <Link to="/user-profile#my-finds">
                <p>My Finds</p>
              </Link>
            </li>
            <li className={styles.nav_list_li}>
              <Link to="/user-profile#my-comments">
                <p>My Comments</p>
              </Link>
            </li>
            <br />
            <li className={styles.nav_list_li}>
              <Link to="/add-find">
                <p>Add find</p>
              </Link>
            </li>
          </ul>
          <button type="click" className="button_main" onClick={handleClick}>
            Logout
          </button>
        </nav>
      );
    } else {
      return (
        <nav className={styles.user_menu_nav} aria-label="User Menu Navigation">
          <LoginForm loginUser={loginUser} />
          <p className="p_bold">New to FossilFinds?</p>
          <Link to="/sign-up">
            <p>Sign up</p>
          </Link>
        </nav>
      );
    }
  } else {
    return null;
  }
}
