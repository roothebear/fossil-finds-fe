import styles from "./Filter.module.css";

export default function Filter({ filtersDisplayed }) {
  const handleClick = (event) => {
    console.log(event.target.name);
  };

  if (filtersDisplayed) {
    return (
      <menu className={styles.filter_menu}>
        <div className={styles.filter_menu_section}>
          <h2 className="">Type:</h2>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Mammal
          </button>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Fish
          </button>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Dinosaur
          </button>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Mollusc
          </button>
        </div>
        <div className={styles.filter_menu_section}>
          <h2 className="">Sort by:</h2>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Title
          </button>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Date posted
          </button>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Username
          </button>
          <button
            aria-checked="true"
            className="button_filter_item"
            role="menuitemradio"
            type="button"
            value=""
          >
            <div className="button_radio"></div>Type
          </button>
        </div>
      </menu>
    );
  } else {
    return null;
  }
}
