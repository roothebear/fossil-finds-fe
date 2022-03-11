import { Link } from "react-router-dom";
import styles from "./Find.module.css";

export default function FindRow({ find }) {
  const paramString = `/finds/${find.find_id}`;

  return (
    <li className={styles.find_row_li}>
      <div className="grid_column_1">
        <img
          className={styles.find_row_img}
          src={find.img_url}
          alt={find.title}
        />
      </div>
      <div className="grid_column_2">
        <h2 className={styles.find_row_h2}>{find.title}</h2>
        <p className={styles.find_row_p}>{find.author}</p>
        <p className={styles.find_row_p}>{find.created_at.slice(0, 10)}</p>
      </div>
      <div className="grid_column_3">
        <Link to={paramString}>
          <button className={styles.find_row_more_info_button}>Info</button>
        </Link>
      </div>
    </li>
  );
}
