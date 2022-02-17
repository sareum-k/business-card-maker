import React from 'react';
import styles from './header.module.css'

const Header = ({ onLogout }) => (
    <header className={styles.container}>
        {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
        <img className={styles.img} src='/images/logo.png' alt="logo" />
        <p className={styles.title}>Business Card Maker</p>
    </header>
);

export default Header;