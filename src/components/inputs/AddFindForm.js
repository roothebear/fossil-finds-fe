import { useState, useEffect } from "react";
import { fetchLocations } from "../../api/locations.api";
import { fetchTypes } from "../../api/types.api";
import styles from "./AddFindForm.module.css";

export default function AddFindForm({ addFind, user }) {
  const [addFindFormInputs, setAddFindFormInputs] = useState({});
  const [locations, setLocations] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchTypes().then(({ types }) => {
      console.log("types: ", types)
      setTypes(types);
    });
    fetchLocations().then(({ locations }) => {
      console.log("locs: ", locations);
      setLocations(locations);
    });
  }, []);

  navigator.geolocation.getCurrentPosition((position) => {
    setAddFindFormInputs((currState) => {
      return {
        ...currState,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  });

  const typesList = types.map((type) => {
    return (
      <option value={type.slug} key={type.type_id} >
        {type.slug}: {type.description}
      </option>
    );
  });

  const locationsList = locations.map((location) => {
    return (
      <option value={location.location_id} key={location.location_id}>
        {location.settlement}, {location.county}
      </option>
    );
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddFindFormInputs((values) => ({ ...values, [name]: value }));
    console.log(addFindFormInputs)
  };

  const handleAddFindFormSubmit = (event) => {
    event.preventDefault();
    const newFind = {
      ...addFindFormInputs,
      author: user.username,
      latitude: Number(addFindFormInputs.latitude),
      longitude: Number(addFindFormInputs.longitude),
    };
    console.log("Form object submitted: ", newFind);
    addFind(newFind);
    setAddFindFormInputs({});
  };

  return (
    <form className={styles.add_find_form} onSubmit={handleAddFindFormSubmit}>
      <legend>
        One of the best things about Fossil Finds is that you and add your own
        finds to our collection. Post a find below and share it with the world!
      </legend>
      <label className={styles.add_find_form_label}>
        Give your find a title:
      </label>
      <input
        className={styles.add_find_form_input}
        type="text"
        name="title"
        value={addFindFormInputs.title || ""}
        onChange={handleChange}
      />
      <label className={styles.add_find_form_label}>Describe your find:</label>
      <input
        className={styles.add_find_form_input}
        type="text"
        name="body"
        value={addFindFormInputs.body || ""}
        onChange={handleChange}
      />
      <label className={styles.add_find_form_label}>
        Upload a photo of your find:
      </label>
      <input
        className={styles.add_find_form_input}
        type="text"
        name="img_url"
        value={addFindFormInputs.img_url || ""}
        onChange={handleChange}
      />
      <label className={styles.add_find_form_label}>
        What type of fossil do you think it is?
      </label>
      <select
        className={styles.add_find_form_input}
        type="text"
        name="type"
        value={addFindFormInputs.type || "Unknown"}
        onChange={handleChange}
      >
        {typesList}
      </select>
      <label className={styles.add_find_form_label}>
        Where did you find it?
      </label>
      <select
        className={styles.add_find_form_input}
        type="number"
        name="location_id"
        value={addFindFormInputs.location_id || ""}
        onChange={handleChange}
      >
        {locationsList}
      </select>
      <legend>
        The geo-location default below is your device location. Feel free to
        change manually!
      </legend>
      <label className={styles.add_find_form_label}>Latitude:</label>
      <input
        className={styles.add_find_form_input}
        type="number"
        name="latitude"
        value={addFindFormInputs.latitude || ""}
        onChange={handleChange}
      />
      <label className={styles.add_find_form_label}>Longitude:</label>
      <input
        className={styles.add_find_form_input}
        type="number"
        name="longitude"
        value={addFindFormInputs.longitude || ""}
        onChange={handleChange}
      />
      <button type="submit" className="button_main">
        Add Find
      </button>
    </form>
  );
}
