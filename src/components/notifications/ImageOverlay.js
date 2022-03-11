import styles from "./ImageOverlay.module.css";

export default function ImageOverlay({
  img_url,
  title,
  overlayActive,
  setOverlayActive,
}) {
  const handleClick = () => {
    setOverlayActive(false);
  };

  if (overlayActive) {
    return (
      <div className={styles.overlay}>
        <div className={styles.overlay_img_container}>
          <button className={styles.overlay_close_button} onClick={handleClick}>
            X CLOSE
          </button>
          <img className={styles.overlay_img} alt={title} src={img_url}></img>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
