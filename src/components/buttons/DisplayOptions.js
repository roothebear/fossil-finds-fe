import styles from "./DisplayOptions.module.css";

export default function DisplayOptions({ setDisplayType }) {
  const handleClick = (event) => {
    setDisplayType(() => {
      return event.target.name;
    });
  };

  return (
    <menu className={styles.display_options_menu}>
      <button
        name="map"
        className={styles.display_options_button_left}
        onClick={handleClick}
      >
        map
      </button>
      <button
        name="list"
        className={styles.display_options_button_middle}
        onClick={handleClick}
      >
        list
      </button>
      <button
        name="icons"
        className={styles.display_options_button_right}
        onClick={handleClick}
      >
        icons
      </button>
    </menu>
  );
}
