import { React, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import {
  fetchFinds,
  fetchFindById,
  postFind,
  updateFindById,
} from "./api/finds.api";
import { fetchUser, fetchUsers, postUser } from "./api/users.api";
import {
  fetchComments,
  fetchCommentsByFindId,
  patchCommentByCommentId,
  postCommentByFindId,
  deleteComment,
} from "./api/comments.api";
import { fetchTypes } from "./api/types.api";
import { fetchLocations } from "./api/locations.api";

import {
  Home,
  Finds,
  Find,
  UserProfile,
  SignUp,
  AddFind,
  Identify,
} from "./pages/index";

import { LoggedInContext } from "./contexts/LoggedIn";
import { Navigation, FooterNavigation } from "./components/navigation/index";
import "./css/App.css";


function App() {
  // state - status, errors, other user feedback
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);


  // state - user
  const [user, setUser] = useState({});
  const [avatarUrl, setAvatarUrl] = useState(
    "../images/default-avatar-480px.png"
  );
    const [apiKey, setApiKey] = useState(
      ""
    );

  // state - finds, comments, locations
    const [filterOptions, setFilterOptions] = useState({});
    const [sortByOptions, setSortByOptions] = useState({});
  const [finds, setFinds] = useState([]);
    const [locations, setLocations] = useState([]);

  // functions
  const loginUser = (username) => {
    fetchUsers().then(({ users }) => {
      let existingUsers = users.map((user) => {
        return user.username;
      });
      if (existingUsers.includes(username)) {
        fetchUser(username)
          .then(({ user }) => {
            console.log("user: ", user);
            setUser(user);
            return user;
          })
          .then(({ avatar_url }) => {
            console.log("avatar: ", avatar_url);
            setAvatarUrl(avatar_url);
          });
        // update isLoggedIn to true
        setLoggedIn(() => {
          return true;
        });
      } else {
        return alert("Error: No such user exists!");
      }
    });
  };

  const logoutUser = () => {
    setLoggedIn(() => {
      return false;
    });
    setUser(() => {
      return {};
    });
    setAvatarUrl(() => {
      return "../images/default-avatar-480px.png";
    });
  };

  const createAccount = (newUser) => {
    fetchUsers().then(({ users }) => {
      let existingUsers = users.map((user) => {
        return user.username;
      });
      if (!existingUsers.includes(newUser.username)) {
        postUser(newUser);
        alert("Account Created!");
      } else {
        return alert("Cannot create account as user already exists!");
      }
    });
  };

  const addFind = (newFind) => {
    postFind(newFind).then(()=> {
      fetchFinds().then(({ finds }) => {
        setFinds(finds);
        setIsLoading(false);
      });
    })
  }

  // global use effects
  useEffect(() => {
    setIsLoading(true);

    // set up the params string to use in Finds
    // let paramsString = ""

    fetchFinds().then(({ finds }) => {
      setFinds(finds);
      setIsLoading(false);
    });
  }, [filterOptions, sortByOptions]);

    useEffect(() => {
      setIsLoading(true);
      fetchLocations().then(({ locations }) => {
        setLocations(locations);
        setIsLoading(false);
      });
    }, []);

  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <div className="App">
          <Navigation
            avatarUrl={avatarUrl}
            loginUser={loginUser}
            logoutUser={logoutUser}
          />
          <Routes>
            <Route path="/" element={<Home finds={finds} />} />
            <Route
              path="/finds"
              element={
                <Finds
                  finds={finds}
                  setFilterOptions={setFilterOptions}
                  sortByOptions={setSortByOptions}
                />
              }
            />
            <Route path="/finds/:find_slug" element={<Find user={user} />} />
            <Route path="/identify" element={<Identify />} />
            <Route
              path="/user-profile"
              element={
                <UserProfile avatarUrl={avatarUrl} user={user} finds={finds} />
              }
            />
            <Route
              path="/add-find"
              element={<AddFind addFind={addFind} user={user} />}
            />
            <Route
              path="/sign-up"
              element={<SignUp createAccount={createAccount} />}
            />
          </Routes>
          <FooterNavigation setApiKey={setApiKey} />
        </div>
      </BrowserRouter>
    </LoggedInContext.Provider>
  );
}

export default App;
