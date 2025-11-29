import styles from './Window.module.css';


function Window({ imgSrc, clickable = true, day, onClick}) {
  const now = new Date();
  clickable = (now).getTime() >= new Date(2025, 11, day).getTime();
  clickable = true;

  const onClickCallback = ()=>{
    if (clickable) {
      if (onClick) onClick(imgSrc);
    }
  };
  return (
    <div className={`${styles.window} ${clickable ? styles.clickable : ''}`}
         onClick={onClickCallback}>
      <img src={process.env.PUBLIC_URL + imgSrc} alt="Elem" className={`${styles.image}`} />
    </div>
  );

}

export default Window;
