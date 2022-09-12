import React, {useState} from 'react';

const AddCarForm = ({sendForm, success, error, nameButton, carForm, setCarForm}) => {

    const addCar = (event) => {
        event.preventDefault();
        sendForm(carForm);
    }

    return (
        <div>
            <div className="row justify-content-center align-items-center">
                <div className="col col-md-10 col-lg-8 col-xl-6 col-xxl-6">
                    <form className="my-background-car-form my-form-auth">
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Марка</label>
                            <input
                                type="text"
                                value={carForm.brand}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setCarForm({...carForm, brand: e.target.value})}
                            />
                            {error.brand
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.brand}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Модель</label>
                            <input
                                type="text"
                                value={carForm.model}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setCarForm({...carForm, model: e.target.value})}
                            />
                            {error.model
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.model}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Цена</label>
                            <input
                                type="text"
                                value={carForm.price}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setCarForm({...carForm, price: e.target.value})}
                            />
                            {error.price
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.price}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Год</label>
                            <input
                                type="text"
                                value={carForm.year}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setCarForm({...carForm, year: e.target.value})}
                            />
                            {error.year
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.year}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Пробег</label>
                            <input
                                type="text"
                                value={carForm.mileage}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setCarForm({...carForm, mileage: e.target.value})}
                            />
                            {error.mileage
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.mileage}</div>
                                :
                                ''
                            }
                        </div>
                        <div className="mb-3 my-btn-input text-white">
                            <label htmlFor="exampleInputEmail1" className="form-label">Описание</label>
                            <input
                                type="text"
                                value={carForm.description}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setCarForm({...carForm, description: e.target.value})}
                            />
                            {error.description
                                ?
                                <div id="emailHelp" className="form-text text-warning">{error.description}</div>
                                :
                                ''
                            }
                        </div>
                        {success ?
                            <div id="emailHelp" className="form-text text-warning">{success}</div> : ''
                        }
                        <button onClick={addCar} type="submit" className="btn btn-primary my-btn-color">{nameButton}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCarForm;