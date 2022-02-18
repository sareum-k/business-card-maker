import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
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
            <div className={styles.container}>
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    );
}

export default Main;