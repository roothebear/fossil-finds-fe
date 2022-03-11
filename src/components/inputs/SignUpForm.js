import { useState } from "react";
import styles from "./SignUpForm.module.css";

export default function SignUpForm({ createAccount }) {
  const [signUpFormInputs, setSignUpFormInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignUpFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form object submitted: ", signUpFormInputs);
    createAccount(signUpFormInputs);
    setSignUpFormInputs({});
  };

  return (
    <form className={styles.login_form} onSubmit={handleSignUpFormSubmit}>
      <legend>
        Get started on FossilFinds today! With an account, you will be able to
        add your own finds to the Fossil Finds database, and comment and like
        other finds.
      </legend>
      <label>Your name</label>
      <input
        type="text"
        name="name"
        value={signUpFormInputs.name || ""}
        onChange={handleChange}
      />
      <label>Choose a username</label>
      <input
        type="text"
        name="username"
        value={signUpFormInputs.username || ""}
        onChange={handleChange}
      />
      <label>Upload a profile photo</label>
      <input
        type="text"
        name="avatar_url"
        value={signUpFormInputs.avatar_url || ""}
        onChange={handleChange}
      />
      <button type="submit" className="button_main">
        Submit
      </button>
    </form>
  );
}
