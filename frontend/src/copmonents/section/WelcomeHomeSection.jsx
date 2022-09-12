import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";

const WelcomeHomeSection = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Добро пожаловать!</h1>
                        <p className="lead text-muted">Это простой тестовый сайт. Frontend написан на <a href="https://reactjs.org/">React</a>, backend на <a
                            href="https://laravel.com/">Laravel</a></p>
                        <p className="lead text-muted">На сайте есть авторизация и регистрация. Аутентификация реализована с помощью <a
                            href="https://laravel.com/docs/9.x/sanctum#how-it-works-spa-authentication">Sanctum</a>.</p>
                        <p className="lead text-muted">В разделе <Link to="cars">Автомобили</Link> реализована система CRUD. Вы можете просматривать
                            все или отдельно каждый автомобиль, добавлять редактировать или удалять автомобиль.</p>
                        <p className="lead text-muted">В разделе <Link to="/text">Текст</Link> есть некоторый функционал написанный при помощи регулярных выражений:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Разбивать числа на разряды</li>
                            <li className="list-group-item">Удалять пробелы перед знаками препинания</li>
                            <li className="list-group-item">Удалять повторяющиеся слова из текста</li>
                        </ul>
                        {!isAuth
                        ?
                            <p>
                                <Link to="/login" className="btn btn-primary my-2">Авторизация</Link>
                                <Link to="/register" className="btn btn-secondary my-2">Регистрация</Link>
                            </p>
                        :
                            ''
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WelcomeHomeSection;