import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm({
  loginUser
}) {
  const [usernameInput, setUsernameInput] = useState("")

  const handleChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
      loginUser(usernameInput)
    }

  return (
    <form className={styles.login_form} onSubmit={handleLoginFormSubmit}>
      <label>Sign in with your username below:</label>
      <input value={usernameInput || ""} onChange={handleChange} />
      <button type="submit" className="button_main">
        Login
      </button>
    </form>
  );
}
