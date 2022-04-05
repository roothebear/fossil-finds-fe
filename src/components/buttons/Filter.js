import styles from "./Filter.module.css";

export default function Filter({ filtersDisplayed, types, setFilterOptions, setSortByOptions }) {

  const handleClick = (truth, value) => {
    // set state of params string for fetch finds in App with things set to true


    // setParamString(()=> {
    }

  // const typesFilterList = types.map((type) => {
  //   return <button
  //           aria-checked="false"
  //           className="button_filter_item"
  //           role="menuitemradio"
  //           type="button"
  //           value="type.slug"
  //           onClick={(value) => handleClick(["aria-checked"], value)}
  //         >
  //           <div className="button_radio"></div>type.slug
  //         </button>;
  // });

  if (filtersDisplayed) {
    return (
      <menu className={styles.filter_menu}>
        <div className={styles.filter_menu_section}>
          <h2 className="">Type:</h2>
          {/* {typesFilterList} */}
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
