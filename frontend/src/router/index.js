import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import CarsPage from "../pages/CarsPage";
import EditCarPage from "../pages/EditCarPage";
import CarIdPage from "../pages/CarIdPage";
import TextPage from "../pages/TextPage";


export const privateRoutes = [
    {path: '/edit/:id', component: EditCarPage, exact: true},
]

export const protectedRoutes = [
    {path: '/login', component: LoginPage, exact: true},
    {path: '/register', component: RegisterPage, exact: true},
]

export const publicRoutes = [
    {path: '/home', component: HomePage, exact: true},
    {path: '/cars', component: CarsPage, exact: true},
    {path: '/carId/:id', component: CarIdPage, exact: true},
    {path: '/text', component: TextPage, exact: true},
]