import styles from "./Find.module.css";
import { Link } from "react-router-dom";

export default function MapFindCard({ find, mapCardDisplayed }) {
  const paramString = `/finds/${find.find_id}`;

  if (mapCardDisplayed) {
    return (
      <div className={styles.map_card}>
        <img
          className={styles.map_card_img}
          src={find.img_url}
          alt={find.title}
        />
        <div className={styles.map_card_info_container}>
          <div className={styles.map_card_text_info}>
            <h2 className={styles.map_card_h2}>{find.title}</h2>
            <p className={styles.map_card_p}>{find.author}</p>
          </div>
          <div className={styles.map_card_more_info}>
            <Link to={paramString}>
              <button className={styles.find_card_more_info_button}>
                Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
