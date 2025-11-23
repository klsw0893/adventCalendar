import styles from './Window.module.css';


function Window({ imgSrc, clickable = true, day, onClick}) {
  const now = new Date();
  clickable = (now).getTime() >= new Date(now.getFullYear(), 11, day).getTime();

  const onClickCallback = ()=>{
    if (clickable) {
      if (onClick) onClick(imgSrc);
    }
  };
  return (
    <div className={`${styles.window} ${clickable ? styles.clickable : ''}`}
         onClick={onClickCallback}>
      <img src={imgSrc} alt="Elem" className={`${styles.image}`} />
    </div>
  );

}

export default Window;
