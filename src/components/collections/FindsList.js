import FindRow from "../find/FindRow";
import styles from "./FindsList.module.css";

export default function FindsList({ finds }) {
  const findList = finds.map((find) => {
    return <FindRow find={find} key={find.find_id} />;
  });

  return <ul className={styles.FindsList_section}>{findList}</ul>;
}
