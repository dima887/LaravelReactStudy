<?php

namespace App\Http\Repositories;

use App\Models\Car;

class WriteCarRepository
{
    /**
     * Save the new car
     *
     * @param $request
     * @return mixed
     */
    static public function storeCar($request)
    {
        return Car::create($request);
    }


    /**
     * Update car
     *
     * @param $request
     * @return mixed
     */
    static public function updateCar($request)
    {
        $save = CarsRepository::getCarById($request->post('id'));
        $save->brand = $request->post('brand');
        $save->model = $request->post('model');
        $save->price = $request->post('price');
        $save->year = $request->post('year');
        $save->mileage = $request->post('mileage');
        $save->description = $request->post('description');
        return $save->save();
    }
}
