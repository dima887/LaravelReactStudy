import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, protectedRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)


    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/home'/>
            </Switch>
            :
            <Switch>
                {protectedRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/login'/>
            </Switch>
    );
};

export default AppRouter;