import React from 'react';
import {Link} from "react-router-dom";

const WelcomeTextSection = () => {
    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Добро пожаловать!</h1>
                        <p className="lead text-muted">Авторизуйтесь, чтобы использовать функционал.</p>
                        <p className="lead text-muted">Вам будем доступно:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Разбивать числа на разряды</li>
                            <li className="list-group-item">Удалять пробелы перед знаками препинания</li>
                            <li className="list-group-item">Удалять повторяющиеся слова</li>
                        </ul>
                        <p>
                            <Link to="/login" className="btn btn-primary my-2">Авторизация</Link>
                            <Link to="/register" className="btn btn-secondary my-2">Регистрация</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WelcomeTextSection;