import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context";
import http from "../../axios";
import ErrorLogin from "../UI/error/ErrorLogin";
import Loader from "../UI/Loader/Loader";

const RegisterForm = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {userAuth, setUserAuth} = useContext(AuthContext);
    const [isLoading, setLoading] = useState(false);
    const [register, setRegister] = useState({name: '', email: '', password: '', password_confirmation: ''});
    const [error, setError] = useState({name: '', email: '', password: '', password_confirmation: '', unexpected: ''});

    const signUp = (event) => {
        event.preventDefault();

        setLoading(true)
        http.get('/sanctum/csrf-cookie')
            .then((res) => {
                http.post('api/register', {
                    name: register.name,
                    email: register.email,
                    password: register.password,
                    password_confirmation: register.password_confirmation,
                })
                    .then((res) => {
                        console.log(res)
                        setLoading(false)
                        if (res.request.status === 200) {
                            setError('');
                            setIsAuth(true);
                            localStorage.setItem('auth', 'true')
                            setUserAuth(res.data.user)
                        }
                    })
                    .catch((er) => {
                        setLoading(false)
                        console.log(er.response.data.errors)
                        if (er.response.status === 422) {
                            setError(er.response.data.errors)
                        } else {
                            setError({unexpected: "Возникла непредвиденная ошибка. Попробуйте повторить"})
                        }
                    })
             })
            .catch((er) => {
                console.log(er)
                setLoading(false)
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col col-md-10 col-lg-8 col-xl-6 col-xxl-6">
                    <form className="my-border my-form-auth">
                        {error.unexpected
                            ?
                            <ErrorLogin error={error.unexpected}/>
                            :
                            ''
                        }
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setRegister({...register, name: e.target.value})}
                            />
                            {error.name
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.name}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setRegister({...register, email: e.target.value})}
                            />
                            {error.email
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.email}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={e => setRegister({...register, password: e.target.value})}
                            />
                            {error.password
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.password}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password confirmation</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={e => setRegister({...register, password_confirmation: e.target.value})}
                            />
                            {error.password_confirmation
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.password_confirmation}</div>
                                :
                                ''
                            }
                        </div>
                        <button onClick={signUp} type="submit" className="btn btn-primary my-btn-color">Зарегистрироваться</button>
                    </form>
                    {isLoading ? <Loader/> : ''}
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;