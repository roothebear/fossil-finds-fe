import styles from "./Search.module.css";
import SearchForm from "./SearchForm";

export default function Search({ searchDisplayed }) {

  if (searchDisplayed) {
    return (
      <menu className={styles.filter_menu}>
        <div className={styles.filter_menu_section}>
          <SearchForm />
        </div>
      </menu>
    );
  } else {
    return null;
  }
}
