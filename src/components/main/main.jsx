import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './main.module.css';

const Main = ({ authService }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChnage(user => {
            if (!user) {
                navigate('/')
            }
        })
    })

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <h1>Main</h1>
            <Footer />
        </section>
    );
}

export default Main;