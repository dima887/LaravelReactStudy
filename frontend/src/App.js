import './styles/App.css'
import {useEffect, useState} from "react";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./copmonents/UI/Navbar/Navbar";
import AppRouter from "./copmonents/AppRouter";
import {AuthContext} from "./context";
import http from "./axios";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [userAuth, setUserAuth] = useState();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
            if (userAuth === 'undefined') {
                http.get('api/user')
                    .then((res) => {
                        setUserAuth(res)
                    })
                    .catch((er) => {
                        console.log(er)
                    })
            }
        }
    }, [])

    console.log(userAuth)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            userAuth,
            setUserAuth,
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
