import { useState } from "react";
import styles from "./Pages.module.css";

import CollectionContainer from "../components/containers/CollectionContainer";
import DisplayOptions from "../components/buttons/DisplayOptions";
import Filter from "../components/buttons/Filter";
import Search from "../components/inputs/Search";


export default function Finds({ finds, setFilterOptions, setSortByOptions }) {
  const [displayType, setDisplayType] = useState("icons");
  const [filtersDisplayed, setFiltersDisplayed] = useState(false);
  const [searchDisplayed, setSearchDisplayed] = useState(false);


  const toggleMenuDisplayed = (event) => {
    if (event.target.name === "filter") {
      setFiltersDisplayed((currState) => {
        return !currState;
      });
      setSearchDisplayed(false);
    } else {
      setSearchDisplayed((currState) => {
        return !currState;
      });
      setFiltersDisplayed(false);
    }
  };

  return (
    <main className={styles.finds_main}>
      <header className={styles.finds_header}>
        <h1 className={styles.finds_h1}>Finds</h1>
        <DisplayOptions
          displayType={displayType}
          setDisplayType={setDisplayType}
        />
      </header>
      <nav className={styles.finds_nav}>
        <button
          name="search"
          className="button_search"
          onClick={toggleMenuDisplayed}
        >
          search
        </button>
        <button
          name="filter"
          className="button_filter"
          onClick={toggleMenuDisplayed}
        >
          filter
        </button>
      </nav>
      <Filter
        filtersDisplayed={filtersDisplayed}
        setFilterOptions={setFilterOptions}
        sortByOptions={setSortByOptions}
      />
      <Search searchDisplayed={searchDisplayed} />
      <CollectionContainer finds={finds} displayType={displayType} />
    </main>
  );
}
