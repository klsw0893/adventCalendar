import styles from './Window.module.css';

function Window({ src }) {
  return (
    <div className={styles.window}>
      <img src={src} alt="Elem" className={styles.image} />
    </div>
  );
}

export default Window;
