import React from 'react';
import {Link} from "react-router-dom";

const WelcomeCarSection = () => {
    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Добро пожаловать!</h1>
                        <p className="lead text-muted">Авторизуйтесь, чтобы добавлять, редактировать или удалять автомобили.</p>
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

export default WelcomeCarSection;