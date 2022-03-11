import FindCard from "../find/FindCard";
import styles from "./FindsIcons.module.css";

export default function FindsIcons({ finds }) {
  const findList = finds.map((find) => {
    return <FindCard find={find} key={find.find_id} />;
  });

  return <ul className={styles.FindsIcons_section}>{findList}</ul>;
}

