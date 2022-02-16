import React from 'react';
import style from './header.module.css'

const Header = () => (
    <div className={style.container}>
        <img className={style.img} src='/images/logo.png' />
        <p className={style.title}>Business Card Maker</p>
    </div>
);

export default Header;