import React, {useContext} from 'react';
import {AuthContext} from "../context";
import {Link} from "react-router-dom";
import http from "../axios/index";

const CarList = ({cars, setCars, count, setCount}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const removeCarsFront = (car) => {
        setCars(cars.filter(c => c.id !== car))
        setCount(count - 1)
    }

    const destroy = (id) => {
        http.delete('api/car/destroy/' + id)
            .then((res) => {
                //console.log(res)
                removeCarsFront(res.data.id);
            })
            .catch((er) => {
                console.log(er)
            })
    }


    return (
        <div>
            {cars ?
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        {cars.map(car =>
                                <div className="py-1" key={car.id}>
                                    <div className="card">
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
                                        <div className="d-flex justify-content-between py-3">
                                            <Link to={"carId/" + car.id} className="btn btn-sm btn-outline-success">Посмотреть</Link>
                                            {isAuth
                                                ?
                                                <div className="btn-group">
                                                    <Link to={"/edit/" + car.id} className="btn btn-sm btn-outline-info">Отредактировать</Link>
                                                    <button onClick={() => destroy(car.id)} type="button" className="btn btn-sm btn-outline-danger">Удалить</button>
                                                </div>
                                               : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                        )}
                </div>
                : <h2>Список автомобилей пуст...</h2>
            }
        </div>
    );
};

export default CarList;