import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import http from "../axios";

const CarIdPage = () => {
    const params = useParams();
    const [car, setCar] = useState({brand: '', model: '', price: '', year: '', mileage: '', description: ''})
    console.log(params)

    useEffect(() => {
        const getCarById = (id) => {
            http.get('api/car/show/' + id)
                .then((res) => {
                    setCar(res.data.car)
                })
                .catch((er) => {
                    console.log(er)
                })
        }
        getCarById(params.id)
    }, [])
    return (
        <div className="py-4 container">
            <div className="py-2 text-center">
                <Link to={'/cars'} className="btn btn-info py-2">Вернуться к списку</Link>
            </div>
            <div className="card col col-md-8 mx-auto">
                <img src="https://img3.akspic.ru/crops/7/4/9/7/6/167947/167947-legkovyye_avtomobili-sportkar-delorian-dms_delorian-komplektacii_avtomobilya-1920x1080.jpg"
                     className="card-img-top my-img-items" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{car.brand} {car.model}</h5>
                    <p className="card-text">{car.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Цена: {car.price}$</li>
                    <li className="list-group-item">Год: {car.year}</li>
                    <li className="list-group-item">Пробег: {car.mileage} км.</li>
                </ul>
            </div>
        </div>
    );
};

export default CarIdPage;