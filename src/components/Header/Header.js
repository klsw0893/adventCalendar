import React from 'react';
import styles from './Header.module.css';

const Header = ({src}) => {
  return (
    <header className={styles.header}>
      <img src={src} className={styles.banner_img} alt="Header banner" /> 
    </header>
  );
};

export default Header;
