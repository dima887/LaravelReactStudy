import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import http from "../axios/index";
import AddCarForm from "../copmonents/forms/AddCarForm";

const EditCarPage = () => {
    const params = useParams();
    const [error, setError] = useState({brand: '', model: '', price: '', year: '', mileage: '', description: ''});
    const [success, setSuccess] = useState();
    const [carForm, setCarForm] = useState({brand: '', model: '', price: '', year: '', mileage: '', description: ''});

    useEffect(() => {
        const getCarById = (id) => {
            http.get('api/car/show/' + id)
                .then((res) => {
                    setCarForm(res.data.car)
                })
                .catch((er) => {
                    console.log(er)
                })
        }
        getCarById(params.id)
    }, [])
    const editCar = () => {
        http.put('api/car/update', {
            id: carForm.id,
            brand: carForm.brand,
            model: carForm.model,
            price: carForm.price,
            year: carForm.year,
            mileage: carForm.mileage,
            description: carForm.description,
        })
            .then((res) => {
                console.log(res)
                setError({brand: '', model: '', price: '', year: '', mileage: '', description: ''})
                setSuccess('Данные автомобиля успешно изменены')
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((er) => {
                console.log(er)
                setError(er.response.data.errors)
                setSuccess(false)
            })
    }

    return (
        <div className="container">
            <div className="py-2 text-center">
                <Link to={'/cars'} className="btn btn-info py-2">Вернуться к списку</Link>
            </div>
            <h2 className="text-center">ID автомобиля: {params.id}</h2>

            <AddCarForm sendForm={editCar} success={success} error={error} carForm={carForm} setCarForm={setCarForm} nameButton="Редактировать"/>
        </div>
    );
};

export default EditCarPage;