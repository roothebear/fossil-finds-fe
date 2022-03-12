import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import UserMenu from "./UserMenu";

export default function Navigation({ avatarUrl, loginUser, logoutUser}) {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((currState) => {
      return !currState;
    });
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header_logo_link}>
        <img
          className={styles.header_logo}
          src={"../images/fossil-finds-logo-480px-blue.png"}
          alt="Fossil Finds logo and link to homepage"
        />
      </Link>
      <nav className={styles.header_nav} aria-label="Main Navigation">
        <ul className={styles.nav_list}>
          <li className={styles.nav_list_li}>
            <Link to="/finds">
              <button className={styles.nav_button} alt="Go to finds page">
                Explore
              </button>
            </Link>
          </li>
          <li className={styles.nav_list_li}>
            <Link to="/identify">
              <button className={styles.nav_button_secondary_colour} alt="Go to identify find page">
                Identify
              </button>
            </Link>
          </li>
          <li className={styles.nav_list_li}>
            <button className={styles.nav_profile_button} onClick={toggleMenu}>
              <img
                className={styles.nav_button_img}
                src={avatarUrl}
                alt="Show and hide menu selector"
              />
            </button>
          </li>
        </ul>
      </nav>
      <UserMenu
        menuActive={menuActive}
        avatarUrl={avatarUrl}
        loginUser={loginUser}
        logoutUser={logoutUser}
      />
    </header>
  );
}
