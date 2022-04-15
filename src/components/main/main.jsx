import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './main.module.css';

const Main = ({ authService }) => {
    const [cards, setCards] = useState({ // 객체 안에 객체, key는 id값이 된다.
        1: {
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
        2: {
            id: '2',
            name: 'Sareum',
            company: 'Kakao',
            theme: 'light',
            title: 'Sofware Engineer',
            email: 'rkdtkfma@naver.com',
            message: 'go for it',
            fileName: 'sareum',
            fileURL: '/images/default_logo.png'
        },
        3: {
            id: '3',
            name: 'Ellie',
            company: 'Samsung',
            theme: 'dark',
            title: 'Sofware Engineer',
            email: 'rkdtkfma@naver.com',
            message: 'go for it',
            fileName: 'sareum',
            fileURL: '/images/default_logo.png'
        }
    });

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

    const createOrUpdateCard = card => {
        const updated = { ...cards };
        updated[card.id] = card;
        setCards(updated);
    }
    const deleteCard = card => {
        const updated = { ...cards };
        delete updated[card.id];
        setCards(updated);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
}

export default Main;