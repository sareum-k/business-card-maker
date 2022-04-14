import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './main.module.css';

const Main = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Sareum',
            company: 'Kakao',
            theme: 'light',
            title: 'Sofware Engineer',
            email: 'rkdtkfma@naver.com',
            message: 'go for it',
            fileName: 'sareum',
            fileURL: '/images/default_logo.png'
        },
        {
            id: '2',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            title: 'Sofware Engineer',
            email: 'rkdtkfma@naver.com',
            message: 'go for it',
            fileName: 'sareum',
            fileURL: '/images/default_logo.png'
        },
        {
            id: '3',
            name: 'sareum2',
            company: 'Kakao',
            theme: 'colorful',
            title: 'Sofware Engineer',
            email: 'rkdtkfma@naver.com',
            message: 'go for it',
            fileName: 'sareum',
            fileURL: null
        }
    ]);
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

    const addCrad = card => {
        const updated = [...cards, card];
        setCards(updated);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCrad={addCrad} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
}

export default Main;