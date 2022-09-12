import React, {useContext, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {AuthContext} from "../../../context";
import http from "../../../axios/index"
import Loader from "../Loader/Loader";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {userAuth, setUserAuth} = useContext(AuthContext);
    const [isLoading, setLoading] = useState(false);


    const logout = () => {
        setLoading(true)
        http.post('api/logout')
            .then((res) => {
                setIsAuth(false);
                setUserAuth(null);
                localStorage.removeItem('auth');
                Redirect.push('/login');
            })
            .catch((er) => {
                setLoading(false)
                console.log(er)
            })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">Главная</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Переключатель навигации">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/cars">Автомобили</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/text">Текст</Link>
                            </li>
                            {userAuth ?
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page">{userAuth.name}</span>
                                </li> : ''
                            }
                            {!isAuth
                                ?
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/login">Войти</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/register">Зарегистрироваться</Link>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li className="nav-item">
                                        <a onClick={logout} className="nav-link active" aria-current="page" href="#">Выйти</a>
                                    </li>

                                </ul>
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
                                <button className="btn btn-outline-success" type="submit">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
            {isLoading ? <Loader/> : ''}
        </div>
    );
};

export default Navbar;