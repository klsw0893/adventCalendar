import styles from './Window.module.css';
import { useState } from 'react';


function Window({ imgSrc, clickable = true, onClick}) {

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
