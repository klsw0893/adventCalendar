import styles from './Popup.module.css';

function Popup({content, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <div className={styles.content}>Advent {content.day}. napja</div>
        {
          content.contentText && (<i className={styles.i}>{content.contentText}</i>)
        }
        {
          content.embeddedQuiz && (<iframe src={content.embeddedQuiz} width="100%" height="85%" frameborder="0" allowfullscreen></iframe>)
        }
      </div>
    </div>
  );
}

export default Popup;
