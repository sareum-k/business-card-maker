import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css'

const Login = ({ authService }) => {
    const navigate = useNavigate();

    const goToMaker = (userId) => {
        navigate('/main', {
            state: { id: userId }
        })
    }

    // useEffect(() => {
    //     authService.onAuthChnage(user => {
    //         user && succeedLogin()
    //     })
    // });

    const onLogin = (e) => {
        authService
            .login(e.currentTarget.textContent)
            .then((data) => goToMaker(data.user.uid));
    }

    return (
        <section className={styles.container}>
            <Header />
            <section>
                <p className={styles.title}>Login</p>
                <ul>
                    <li>
                        <button className={styles.login} onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button className={styles.login} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;