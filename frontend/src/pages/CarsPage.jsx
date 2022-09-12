import React, {useContext, useEffect, useState} from 'react';
import http from "../axios/index";
import {AuthContext} from "../context";
import WelcomeCarSection from "../copmonents/section/WelcomeCarSection";
import AddCarForm from "../copmonents/forms/AddCarForm";
import CarList from "../copmonents/CarList";
import Loader from "../copmonents/UI/Loader/Loader";

const CarsPage = () => {
    const [cars, setCars] = useState();
    const [count, setCount] = useState(0);
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [carForm, setCarForm] = useState({brand: '', model: '', price: '', year: '', mileage: '', description: ''});
    const [error, setError] = useState({brand: '', model: '', price: '', year: '', mileage: '', description: ''});
    const [success, setSuccess] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const getAllCars = () => {
            setLoading(true)
            http.get('api/cars')
                .then((res) => {
                    //console.log(res.data.cars)
                    setCount(res.data.cars.length)
                    setCars(res.data.cars)
                    setLoading(false)
                })
                .catch((er) => {
                    console.log(er)
                    setLoading(false)
                })
        }
        getAllCars();
    }, [])

    const addCar = (newCar) => {
        setCars([...cars, newCar])
    }

    const storeCar = (carForm) => {
        setLoading(true)

        http.post('api/cars', {
            brand: carForm.brand,
            model: carForm.model,
            price: carForm.price,
            year: carForm.year,
            mileage: carForm.mileage,
            description: carForm.description,
        })
            .then((res) => {
                //console.log(res)
                setLoading(false)
                addCar(res.data.car);
                setCount(count + 1)
                setError({brand: '', model: '', price: '', year: '', mileage: '', description: ''})
                setCarForm({brand: '', model: '', price: '', year: '', mileage: '', description: ''})
                setSuccess('Автомобиль успешно добавлен')
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((er) => {
                console.log(er)
                setLoading(false)
                setError(er.response.data.errors)
                setSuccess(false)
            })
    }
    return (
        <div>

            {!isAuth ?
                <WelcomeCarSection/>
                :
                <div>
                    <AddCarForm sendForm={storeCar} success={success} error={error} carForm={carForm} setCarForm={setCarForm} nameButton="Добавить"/>
                    {isLoading ? <Loader/> : ''}
                </div>
            }
            <div className="album py-5 bg-light">
                <div className="container">
                    <p className="text-info">Количество автомобилей: {count}</p>
                    <CarList cars={cars} setCars={setCars} count={count} setCount={setCount}/>
                </div>
            </div>
        </div>
    );
};

export default CarsPage;