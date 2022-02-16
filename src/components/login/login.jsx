import Header from '../header/header';
import Footer from '../footer/footer';
import style from './login.module.css'

const Login = ({ authService }) => {

    const onLogin = (e) => {
        authService.login(e.currentTarget.textContent)
    }

    return (
        <section className={style.container}>
            <Header />
            <section>
                <p className={style.title}>Login</p>
                <ul>
                    <li>
                        <button onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;