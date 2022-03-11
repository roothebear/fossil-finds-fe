import { Link } from "react-router-dom";

import styles from "./FooterNavigation.module.css";

export default function FooterNavigation() {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img
          className={styles.footer_logo}
          src="../images/fossil-finds-logo-480px-white.png"
          alt="Fossil Finds logo and link to homepage"
        />
      </Link>
      <nav className={styles.footer_nav} aria-label="Footer Navigation">
        <ul className={styles.nav_list}>
          <li className={styles.nav_list_li}>
            <Link to="/">
              <p className={styles.footer_p}>Home</p>
            </Link>
          </li>
          <li className={styles.nav_list_li}>
            <Link to="/finds">
              <p className={styles.footer_p}>Explore finds</p>
            </Link>
          </li>
          <li className={styles.nav_list_li}>
            <Link to="/about">
              <p className={styles.footer_p}>About</p>
            </Link>
          </li>
          <br />
          <li className={styles.nav_list_li}>
            <Link to="/user-profile">
              <p className={styles.footer_p}>User Profile</p>
            </Link>
          </li>
          <li className={styles.nav_list_li}>
            <Link to="/add-find">
              <p className={styles.footer_p}>Add Find</p>
            </Link>
          </li>
          <br />
          <li className={styles.nav_list_li}>
            <Link to="/login">
              <p className={styles.footer_p}>Login</p>
            </Link>
          </li>
          <li className={styles.nav_list_li}>
            <Link to="/sign-up">
              <p className={styles.footer_p}>Sign Up</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
