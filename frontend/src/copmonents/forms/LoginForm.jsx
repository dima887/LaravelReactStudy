import React, {useContext, useState} from 'react';

import http from "../../axios";
import ErrorLogin from "../UI/error/ErrorLogin";
import {AuthContext} from "../../context";
import Loader from "../UI/Loader/Loader";

const LoginForm = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {userAuth, setUserAuth} = useContext(AuthContext);
    const [login, setLogin] = useState({email: '', password: ''});
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);

    const signIn = (event) => {

        event.preventDefault();
        setLoading(true);

        http.get('/sanctum/csrf-cookie')
            .then((res) => {
                http.post('api/login', {
                    email: login.email,
                    password: login.password,
                })
                    .then((res) => {
                        setLoading(false);
                        if (res.request.status === 200) {
                            setError('');
                            setIsAuth(true);
                            localStorage.setItem('auth', 'true')
                            setUserAuth(res.data.user)
                        }
                    })
                    .catch((er) => {
                        setLoading(false);
                        if (er.response.status === 401) {
                            setError("Неправильный логин или пароль")
                        } else {
                            setError("Возникла непредвиденная ошибка. Попробуйте повторить")
                        }
                    })
            })
            .catch((er) => {
                console.log(er)
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col col-md-10 col-lg-8 col-xl-6 col-xxl-6">
                    <form className="my-border my-form-auth">
                        <ErrorLogin error={error}/>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setLogin({...login, email: e.target.value})}
                            />
                                <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={e => setLogin({...login, password: e.target.value})}
                            />
                        </div>
                        <button onClick={signIn} type="submit" className="btn btn-primary my-btn-color">Войти</button>
                    </form>
                    {isLoading ? <Loader/> : ''}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;