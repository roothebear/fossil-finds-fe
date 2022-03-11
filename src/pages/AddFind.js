import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedIn";

import AddFindForm from "../components/inputs/AddFindForm";

export default function AddFind({addFind, user}) {
  const { loggedIn } = useContext(LoggedInContext);

  if (loggedIn) {
    return (
      <main>
        <h1>Add Find</h1>
        <AddFindForm addFind={addFind} user={user} />
      </main>
    );
  } else {
    return (
      <main>
        <h1>
          Sorry, you can only add finds when logged in! Please sign in using the user menu or 
          <Link to="/sign-up"> create an account</Link>.
        </h1>
      </main>
    );
  }
}
