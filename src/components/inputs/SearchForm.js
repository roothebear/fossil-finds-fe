import { useState } from "react";
import styles from "./SearchForm.module.css";

export default function SearchForm({ createAccount }) {
  const [searchFormInputs, setSearchFormInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearchFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handlesearchFormSubmit = (event) => {
    event.preventDefault();
    // console.log("Form object submitted: ", searchFormInputs);
    // createAccount(searchFormInputs);
    // setSearchFormInputs({});
  };

  return (
    <form className={styles.login_form} onSubmit={handlesearchFormSubmit}>
      <label>Search:</label>
      <input
        className={styles.login_input}
        type="text"
        name="search"
        value={searchFormInputs.search || ""}
        onChange={handleChange}
      />
      <button type="submit" className="button_main">
        Search
      </button>
    </form>
  );
}
