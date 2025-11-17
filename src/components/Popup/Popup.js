import styles from './Popup.module.css';

function Popup({ day, content, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <div className={styles.content}>{"Advent " + day + " napja"}</div>
        <iframe src="https://wordwall.net/hu/embed/0ef032089be14e778f2963c01bcf31d0?themeId=6&templateId=5&fontStackId=0" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        {/*<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IqViXhLmg9A?si=Ewf7g0HgacbxOpSZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/}
      </div>
    </div>
  );
}

export default Popup;
