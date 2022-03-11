import styles from "./Find.module.css";
import { Link } from "react-router-dom";

export default function FindCard({ find }) {
  const paramString = `/finds/${find.find_id}`;

  return (
    <li className={styles.find_card_li}>
      <img
        className={styles.find_card_img}
        src={find.img_url}
        alt={find.title}
      />
      <div className={styles.find_card_info_container}>
        <div className={styles.find_card_text_info}>
          <h2 className={styles.find_card_h2}>{find.title}</h2>
          <p className={styles.find_card_p}>{find.author}</p>
        </div>
        <div className={styles.find_card_more_info}>
          <Link to={paramString}>
            <button className={styles.find_card_more_info_button}>Info</button>
          </Link>
        </div>
      </div>
    </li>
  );
}
