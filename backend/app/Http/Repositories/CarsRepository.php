<?php

namespace App\Http\Repositories;

use App\Models\Car;

class CarsRepository
{

    /**
     * Get all cars
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    static public function getAllCars()
    {
        return Car::all()->toArray();
    }

    /**
     * Get car by ID
     *
     * @param int $id
     * @return mixed
     */
    static public function getCarById(int $id)
    {
        return Car::find($id);
    }
}
